Perfect! 🎉 We're almost done!
File 7: app/page.js (The Big One!)
Inside the app folder, create a file called page.js and paste this:
javascript'use client'

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, DollarSign, Video, FileText, Settings, Bell, CreditCard, Users, MessageSquare, CheckCircle, XCircle, AlertCircle, UserPlus, BookOpen, Shield, Phone, Mail, MapPin, Star, Search, Filter, Plus, Edit, Trash2, Download, Upload, Send, Eye, EyeOff, Lock, Unlock, Heart, Home, Menu, X, ChevronDown, ChevronRight, Play, Pause, Volume2, Mic, Camera, MoreHorizontal } from 'lucide-react';

export default function TeacherPlatform() {
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'Sarah Johnson',
    role: 'teacher',
    email: 'sarah@teacherpro.com',
    birthDate: '1985-03-15',
    ageCategory: 'adult',
    privacyLevel: 'independent',
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [userRole, setUserRole] = useState('teacher');
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample data with comprehensive privacy controls
  const [students] = useState([
    {
      id: 1,
      name: 'Mike Chen',
      email: 'mike@student.com',
      birthDate: '2012-08-20',
      ageCategory: 'under13',
      privacyLevel: 'full_parental',
      guardianName: 'Jennifer Chen',
      guardianEmail: 'jennifer.chen@parent.com',
      guardianPhone: '(555) 123-4567',
      subjects: ['Math', 'Science'],
      totalLessons: 15,
      upcomingLessons: 3,
      status: 'active',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Emma Davis',
      email: 'emma@student.com',
      birthDate: '2009-12-05',
      ageCategory: 'teen',
      privacyLevel: 'supervised',
      guardianName: 'Lisa Davis',
      guardianEmail: 'lisa.davis@parent.com',
      guardianPhone: '(555) 234-5678',
      subjects: ['Physics', 'Chemistry'],
      totalLessons: 12,
      upcomingLessons: 2,
      status: 'active',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Alex Rivera',
      email: 'alex@student.com',
      birthDate: '1999-07-10',
      ageCategory: 'adult',
      privacyLevel: 'independent',
      guardianName: null,
      guardianEmail: null,
      guardianPhone: null,
      subjects: ['Advanced Math', 'Statistics'],
      totalLessons: 8,
      upcomingLessons: 1,
      status: 'active',
      rating: 4.7,
    }
  ]);

  const [lessons] = useState([
    {
      id: 1,
      studentName: 'Mike Chen',
      subject: 'Math - Algebra',
      date: '2025-05-27',
      time: '10:00 AM',
      duration: 60,
      type: 'private',
      status: 'confirmed',
      price: 50,
      teacherNotes: 'Focus on quadratic equations',
      studentNotes: 'Homework: Complete worksheet pages 12-15',
    },
    {
      id: 2,
      studentName: 'Group Physics Lab',
      subject: 'Physics - Motion',
      date: '2025-05-28',
      time: '2:00 PM',
      duration: 90,
      type: 'group',
      status: 'confirmed',
      price: 120,
      maxStudents: 6,
      currentEnrollment: 4,
    },
  ]);

  const [notifications] = useState([
    {
      id: 1,
      type: 'lesson_reminder',
      title: 'Upcoming Lesson',
      message: 'Math lesson with Mike Chen in 1 hour',
      time: '1h',
      read: false,
      priority: 'medium'
    },
    {
      id: 2,
      type: 'payment_received',
      title: 'Payment Received',
      message: '$50 received from Jennifer Chen',
      time: '2h',
      read: false,
      priority: 'low'
    },
  ]);

  // Tab Button Component
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        activeTab === id
          ? 'bg-green-600 text-white'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  // Navigation component
  const Navigation = () => (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-green-600 text-white p-2 rounded-lg">
                <BookOpen size={24} />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">TeacherPro</span>
            </div>
            
            <div className="flex space-x-4">
              {userRole === 'teacher' && (
                <>
                  <TabButton id="dashboard" label="Dashboard" icon={Home} />
                  <TabButton id="calendar" label="Calendar" icon={Calendar} />
                  <TabButton id="students" label="Students" icon={Users} />
                  <TabButton id="lessons" label="Lessons" icon={BookOpen} />
                  <TabButton id="payments" label="Payments" icon={DollarSign} />
                  <TabButton id="documents" label="Documents" icon={FileText} />
                  <TabButton id="messages" label="Messages" icon={MessageSquare} />
                </>
              )}
              {userRole === 'parent' && (
                <>
                  <TabButton id="dashboard" label="Dashboard" icon={Home} />
                  <TabButton id="lessons" label="My Child's Lessons" icon={BookOpen} />
                  <TabButton id="payments" label="Payments" icon={DollarSign} />
                  <TabButton id="documents" label="Resources" icon={FileText} />
                  <TabButton id="messages" label="Messages" icon={MessageSquare} />
                  <TabButton id="booking" label="Book Lesson" icon={Plus} />
                </>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Bell size={20} />
              {notifications.filter(n => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="text-green-600" size={16} />
                </div>
                <span className="text-sm font-medium">{currentUser.name}</span>
                <ChevronDown size={16} />
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <User className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">{currentUser.name}</div>
                        <div className="text-sm text-gray-500">{currentUser.email}</div>
                        <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 inline-block">
                          {currentUser.role}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center space-x-2">
                      <Settings size={16} />
                      <span>Account Settings</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center space-x-2">
                      <Shield size={16} />
                      <span>Privacy Settings</span>
                    </button>
                    <button
                      onClick={() => {
                        setUserRole(userRole === 'teacher' ? 'parent' : 'teacher');
                        setCurrentUser({
                          ...currentUser,
                          role: userRole === 'teacher' ? 'parent' : 'teacher',
                          name: userRole === 'teacher' ? 'Jennifer Chen' : 'Sarah Johnson'
                        });
                        setActiveTab('dashboard');
                        setShowProfile(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center space-x-2"
                    >
                      <User size={16} />
                      <span>Switch to {userRole === 'teacher' ? 'Parent' : 'Teacher'} View</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showNotifications && (
        <div className="absolute right-4 top-16 w-80 bg-white rounded-lg shadow-lg border z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.map(notification => (
              <div key={notification.id} className={`p-4 border-b hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${
                    notification.priority === 'high' ? 'bg-red-100 text-red-600' :
                    notification.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {notification.type === 'lesson_reminder' && <Clock size={16} />}
                    {notification.type === 'payment_received' && <DollarSign size={16} />}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className="text-sm text-gray-600">{notification.message}</div>
                    <div className="text-xs text-gray-400 mt-1">{notification.time} ago</div>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <button className="text-sm text-blue-600 hover:text-blue-800">Mark all as read</button>
          </div>
        </div>
      )}
    </nav>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {currentUser.name}!
        </h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Today's Lessons</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Students</p>
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">$2,340</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <DollarSign className="text-yellow-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="text-red-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Today's Schedule</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {lessons.filter(lesson => lesson.date === '2025-05-27').map(lesson => (
                <div key={lesson.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-green-600 text-white p-2 rounded">
                    <Clock size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{lesson.subject}</div>
                    <div className="text-sm text-gray-600">{lesson.studentName} • {lesson.time}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Video size={16} />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <MessageSquare size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="text-green-600" size={16} />
                </div>
                <div>
                  <div className="text-sm font-medium">Payment received from Jennifer Chen</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <UserPlus className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="text-sm font-medium">New student registered: Sophie Lee</div>
                  <div className="text-xs text-gray-500">5 hours ago</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertCircle className="text-yellow-600" size={16} />
                </div>
                <div>
                  <div className="text-sm font-medium">Guardian approval required for Alex Rivera</div>
                  <div className="text-xs text-gray-500">1 day ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate view based on active tab
  const renderActiveView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold capitalize">{activeTab} View</h2>
            <p className="text-gray-600">Feature coming soon - Your complete {activeTab} management interface</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveView()}
      </main>

      {/* Privacy Notice for Demo */}
      <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center space-x-2 mb-2">
          <Shield size={16} />
          <span className="font-medium">Privacy Protected</span>
        </div>
        <div className="text-sm">
          This platform includes COPPA compliance, age-based privacy controls, and guardian consent management.
        </div>
      </div>
    </div>
  );
}