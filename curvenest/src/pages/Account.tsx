import React from "react";
import { Helmet } from "react-helmet-async";
import { User, Mail, Package, Heart, Settings } from "lucide-react";
import { useAuthStore } from "../context/authStore";
import BackButton from "../components/BackButton";

const Account: React.FC = () => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <main className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">
            Please log in to view your account.
          </p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Account - CurveNest</title>
        <meta
          name="description"
          content="Manage your CurveNest account, view order history, and update your preferences."
        />
      </Helmet>

      <main className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">My Account</h1>

            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Package className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">Orders</h3>
                  <p className="text-gray-600">0 orders</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-semibold">Wishlist</h3>
                  <p className="text-gray-600">0 items</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Settings className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <h3 className="font-semibold">Settings</h3>
                  <p className="text-gray-600">Manage account</p>
                </div>
              </div>
            </div>

            {/* Account Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                <p className="text-gray-600">
                  No orders yet. Start shopping to see your order history here.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded border hover:bg-gray-50 transition-colors">
                    Update Profile
                  </button>
                  <button className="w-full text-left p-3 rounded border hover:bg-gray-50 transition-colors">
                    Change Password
                  </button>
                  <button className="w-full text-left p-3 rounded border hover:bg-gray-50 transition-colors">
                    Notification Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Account;
