import Dashboard from "views/Dashboard.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import UserProfile from "views/UserProfile.jsx";
import AdminProfile from "views/AdminProfile.jsx";
import TableGroupe from "./views/Groupe";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/admin-profile",
    name: "Profil administrateur",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: AdminProfile,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Profil utilisateur",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/groupe",
    name: "Table Groupe",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableGroupe,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  }
];
export default routes;
