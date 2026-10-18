import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 hidden md:block border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wider">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
            <Phone className="w-3.5 h-3.5 text-brand" />
            <span>+91 76197 20000</span>
          </div>
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
            <Mail className="w-3.5 h-3.5 text-brand" />
            <span>sales@conveyindia.in</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 opacity-80">
          <MapPin className="w-3.5 h-3.5 text-brand" />
          <span>Lucknow, Uttar Pradesh, India</span>
        </div>
      </div>
    </div>
  );
};
