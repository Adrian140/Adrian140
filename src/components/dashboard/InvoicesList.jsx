import React, { useState, useEffect } from 'react';
import { Download, Eye, Calendar, FileText, Search, Filter } from 'lucide-react';
import { apiClient } from '../../config/api';

function InvoicesList() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateFilter, setDateFilter] = useState('all');

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const data = await apiClient.invoices.getAll();
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadInvoice = async (invoiceId) => {
    try {
      const blob = await apiClient.invoices.download(invoiceId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `invoice-${invoiceId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading invoice:', error);
    }
  };

  const viewInvoice = async (invoiceId) => {
    try {
      const blob = await apiClient.invoices.view(invoiceId);
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error viewing invoice:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      case 'cancelled':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'paid':
        return 'Plătită';
      case 'pending':
        return 'În așteptare';
      case 'overdue':
        return 'Întârziată';
      case 'cancelled':
        return 'Anulată';
      default:
        return status;
    }
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter !== 'all') {
      const invoiceDate = new Date(invoice.date);
      const now = new Date();
      
      switch (dateFilter) {
        case 'last30':
          matchesDate = (now - invoiceDate) <= (30 * 24 * 60 * 60 * 1000);
          break;
        case 'last90':
          matchesDate = (now - invoiceDate) <= (90 * 24 * 60 * 60 * 1000);
          break;
        case 'thisYear':
          matchesDate = invoiceDate.getFullYear() === now.getFullYear();
          break;
      }
    }
    
    return matchesSearch && matchesStatus && matchesDate;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text-primary">Facturile mele</h2>
        <div className="text-sm text-text-secondary">
          Total: {filteredInvoices.length} facturi
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-text-primary mb-2">
              Caută
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-4 h-4" />
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Număr factură sau descriere..."
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-text-primary mb-2">
              Status
            </label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Toate</option>
              <option value="paid">Plătite</option>
              <option value="pending">În așteptare</option>
              <option value="overdue">Întârziate</option>
              <option value="cancelled">Anulate</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-text-primary mb-2">
              Perioada
            </label>
            <select
              id="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Toate</option>
              <option value="last30">Ultimele 30 zile</option>
              <option value="last90">Ultimele 90 zile</option>
              <option value="thisYear">Anul curent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices List */}
      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center mb-2">
                  <FileText className="w-5 h-5 text-text-secondary mr-2" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Factura #{invoice.number}
                  </h3>
                  <span className={`ml-3 px-2 py-1 text-xs rounded-full ${getStatusColor(invoice.status)}`}>
                    {getStatusText(invoice.status)}
                  </span>
                </div>
                <div className="text-text-secondary space-y-1">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Data: {new Date(invoice.date).toLocaleDateString('ro-RO')}</span>
                  </div>
                  {invoice.dueDate && (
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Scadență: {new Date(invoice.dueDate).toLocaleDateString('ro-RO')}</span>
                    </div>
                  )}
                  {invoice.description && (
                    <p className="text-sm">{invoice.description}</p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-text-primary">
                    €{invoice.amount.toFixed(2)}
                  </p>
                  {invoice.vatAmount && (
                    <p className="text-sm text-text-secondary">
                      TVA: €{invoice.vatAmount.toFixed(2)}
                    </p>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => viewInvoice(invoice.id)}
                    className="flex items-center px-3 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Vizualizează
                  </button>
                  <button
                    onClick={() => downloadInvoice(invoice.id)}
                    className="flex items-center px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Descarcă
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredInvoices.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-secondary mb-2">
            {searchTerm || statusFilter !== 'all' || dateFilter !== 'all' 
              ? 'Nicio factură găsită' 
              : 'Nicio factură disponibilă'
            }
          </h3>
          <p className="text-text-light">
            {searchTerm || statusFilter !== 'all' || dateFilter !== 'all'
              ? 'Încearcă să modifici filtrele de căutare.'
              : 'Facturile tale vor apărea aici după prima comandă.'
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default InvoicesList;
