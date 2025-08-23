import React from 'react';
import { Shield, Key, User } from 'lucide-react';

function AdminLoginInfo() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
      <div className="flex items-center mb-4">
        <Shield className="w-6 h-6 text-blue-600 mr-3" />
        <h3 className="text-lg font-semibold text-blue-900">Acces Administrator</h3>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center mb-2">
            <User className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-900">Email Admin:</span>
          </div>
            <code className="text-blue-800 bg-blue-100 px-2 py-1 rounded">admin@prep-center.eu</code>
        </div>
        
        <div className="bg-white rounded-lg p-4">
          <div className="flex items-center mb-2">
            <Key className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-900">Parolă Admin:</span>
          </div>
          <code className="text-blue-800 bg-blue-100 px-2 py-1 rounded">admin123</code>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Notă:</strong> Acestea sunt credențiale demo pentru testare. 
          În producție, vei avea propriile credențiale securizate.
        </p>
      </div>
    </div>
  );
}

export default AdminLoginInfo;
