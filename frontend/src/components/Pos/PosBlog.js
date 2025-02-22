import React, { useEffect } from 'react';
import { Monitor, Package2, FileText, ShoppingCart, Users, UserCog, BarChart3, PlusCircle, Clipboard, Calendar, MessageCircle, Grid, FileLock, GitPullRequest  } from 'lucide-react';
import anime from 'animejs';
import { Factory, Receipt, Wrench, Book, Briefcase} from "lucide-react";


const modules = [
    {
        icon: <Monitor className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Sales Module",
        features: [
            "✅ Quotation Calculator: Easily generate precise sales quotes.",
            "✅ PDF Quote Builder: Create professional proposals in PDF format.",
            "✅ Sales Commissions: Set commission plans for your sales team."
        ]
    },
    {
        icon: <Package2 className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Invoice (Accounting) Module",
        features: [
            "✅ Bank Sync: Connect and sync bank accounts for smooth transactions.",
            "✅ Payment Processing: Make payments directly from the system.",
            "✅ Financial Reports: Improved budget tracking and analytics."
        ]
    },
    {
        icon: <FileText className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "CRM Module",
        features: [
            "✅ Mobile-Friendly Quotes: Create and access quotes on mobile.",
            "✅ Easy Note-Taking: Add notes with a dictation feature.",
            "✅ Guided Quote Builder: Step-by-step quote creation assistance."
        ]
    },
    {
        icon: <ShoppingCart className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Inventory Module",
        features: [
            "✅ Stock Flow Rules: Automate stock movement.",
            "✅ Lot/Serial Tracking: Monitor inventory at a detailed level.",
            "✅ Dispatch Management: Track and coordinate shipments.",
            "✅ RFID Scanning: Speed up stock updates with RFID."
        ]
    },
    {
        icon: <Users className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Purchase Module",
        features: [
            "✅ Inter-Company Tracking: Manage lots/serials across companies.",
            "✅ Smart Inventory Routes: Set flexible stock movement rules.",
            "✅ Make-to-Stock Orders: Automatically pick or procure inventory as needed."
        ]
    },
    {
        icon: <UserCog className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Point of Sale (POS) Module",
        features: [
            "✅ New Interface: Sleek and user-friendly POS design.",
            "✅ Quick Product Selection: Easily choose product variants.",
            "✅ Barcode Scanning: Instantly create product records."
        ]
    },
    {
        icon: <BarChart3 className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Project Module",
        features: [
            "✅ Advanced Gantt Charts: Zoom, scroll, and organize tasks easily."
        ]
    },
    {
        icon: <PlusCircle className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "E-commerce Module",
        features: [
            "✅ Website Import: Clone and customize existing sites.",
            "✅ Drag-and-Drop Editing: New building blocks for simple design.",
            "✅ Multilingual Support: Quick translation for global reach.",
            "✅ Font Customization: Preview and select fonts easily."
        ]
    },
    {
        icon: <Factory className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Manufacturing Module",
        features: [
            "✅ Component Management: Add missing parts on the go.",
            "✅ Live Order Updates: Adjust production details in real-time."
        ]
    },
    {
        icon: <Receipt className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Expenses Module",
        features: [
            "✅ Better Expense Planning: Track budgets and spending.",
            "✅ Accounting Integration: Automatically apply commitments from purchase orders."
        ]
    },
    {
        icon: <Users className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Employees Module",
        features: [
            "✅ Overtime Reports: Track and manage extra working hours.",
            "✅ Fingerprint Attendance: Use biometrics for attendance.",
            "✅ Integrated Calendar: View work schedules and pending requests."
        ]
    },
    {
        icon: <Wrench className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Maintenance Module",
        features: [
            "✅ Improved Scheduling: Plan and track maintenance activities.",
            "✅ Live Updates: Get real-time task updates.",
            "✅ Inventory Integration: Ensure maintenance parts are available."
        ]
    },
    {
        icon: <FileLock className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "E-Learning Module",
        features: [
            "✅ Create Interactive Courses: Design engaging learning materials.",
            "✅ Track Learner Progress: Monitor completion rates.",
            "✅ Issue Certificates: Manage course certifications."
        ]
    },
    {
        icon: <MessageCircle className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Social Marketing Module",
        features: [
            "✅ Social Sharing Tool: Promote content easily.",
            "✅ Multi-Platform Posting: Schedule posts across social media.",
            "✅ Engagement Tracking: Monitor social media performance."
        ]
    },
    {
        icon: <Calendar className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Calendar Module",
        features: [
            "✅ User-Friendly Scheduler: Simple meeting and event planning.",
            "✅ Google Calendar Sync: Seamless integration with Google Calendar.",
            "✅ Auto Reminders: Get notified about upcoming events."
        ]
    },
    {
        icon: <GitPullRequest className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Events Module",
        features: [
            "✅ Event Ticketing: Sell tickets and track registrations.",
            "✅ Multi-Event Support: Manage multiple events simultaneously.",
            "✅ Live Streaming: Host online events with ease."
        ]
    },
    {
        icon: <Book className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Contacts Module",
        features: [
            "✅ Duplicate Contact Merging: Remove redundant entries.",
            "✅ Smart Contact Labels: Organize and segment contacts.",
            "✅ Custom Fields: Add extra details as needed."
        ]
    },
    {
        icon: <MessageCircle className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Live Chat Module",
        features: [
            "✅ Chatbots: Provide instant responses to queries.",
            "✅ Multi-Agent Support: Assign chats to team members.",
            "✅ CRM Integration: Convert chats into leads."
        ]
    },
    {
        icon: <Clipboard className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Surveys Module",
        features: [
            "✅ Drag-and-Drop Builder: Easily create surveys.",
            "✅ Live Response Tracking: View results in real-time.",
            "✅ Smart Question Logic: Show or hide questions dynamically."
        ]
    },
    {
        icon: <Grid className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Skills Management Module",
        features: [
            "✅ Employee Skills Tracking: Assign and monitor skills.",
            "✅ Training Suggestions: Recommend courses based on skill gaps.",
            "✅ Performance Analysis: Track learning progress."
        ]
    },
    {
        icon: <Briefcase className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Online Jobs Module",
        features: [
            "✅ Automated Job Posting: Share job listings across platforms.",
            "✅ Applicant Tracking: Manage hiring stages from application to onboarding.",
            "✅ Interview Scheduling: Integrate with Calendar for easy bookings."
        ]
    },
    {
        icon: <FileText className="w-6 h-6 md:w-10 md:h-10 text-white" />,
        title: "Employee Contracts Module",
        features: [
            "✅ Digital Contracts: Create and store employee contracts online.",
            "✅ Expiry Alerts: Get notified before contracts expire.",
            "✅ Custom Templates: Use role-specific contract formats."
        ]
    }
];
function Page() {
    useEffect(() => {
        // Animate the icons
        anime({
            targets: '.icon-circle',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1500,
            delay: anime.stagger(200),
            easing: 'easeOutElastic(1, .5)'
        });

        // Animate the cards
        anime({
            targets: '.card-content',
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });
    }, []);

    return (
        <div className="min-h-screen bg-white p-4 md:p-8">
            <h1 className="text-[#005880] text-4xl md:text-[64px] font-bold font-['Inria_Serif'] text-center">
                Our Powerful Enterprise POS System
            </h1>
            <div className="mb-10"></div> {/* Add space between the headings */}
            <h2 className="text-[#005880] text-l md:text-[30px] italic font-['Inria_Serif'] text-center mb-16">
                Feature Analysis
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                    <div
                        key={index}
                        className="relative w-full sm:h-[300px] md:h-[350px] mb-4 md:mb-8" // Increased height on mobile (sm) only
                    >
                        <div className="absolute inset-0 bg-[#005880] rounded-lg shadow-xl translate-x-1 translate-y-1 md:translate-x-2 md:translate-y-2"></div>
                        <div className="relative bg-white p-2 md:p-6 rounded-lg border-2 border-[#005880] h-full">
                            <div className="icon-circle absolute -top-8 -left-3 bg-[#005880] p-1 md:p-3 rounded-full h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex items-center justify-center shadow-lg">
                                {module.icon}
                            </div>
                            <div className="card-content pt-6 md:pt-8 pl-2 md:pl-4">
                                <h3 className="text-[#005880] font-bold text-sm md:text-xl mb-2 md:mb-4">
                                    {module.title}
                                </h3>
                                <ul className="space-y-1 md:space-y-3 text-xs md:text-base">
                                    {module.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;
