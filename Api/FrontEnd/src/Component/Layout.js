import React, { useState } from "react";
import "./layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Badge } from "antd";

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  // const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    // {
    //   name: "Home",
    //   path: "/",
    //   // icon: "ri-home-line",
    // },
    {
      name: "Contributor Application",
      path: "/contributor/application",
      // icon: "ri-file-list-line",
    },
    // {
    //   name: "Apply Doctor",
    //   path: "/apply-doctor",
    //   // icon: "ri-hospital-line",
    // }
    {
      name:'All Images',
      path:'/img/all'
    }
  ];

  const contributorMenu = [
    // {
    //   name: "Home",
    //   path: "/",
    //   // icon: "ri-home-line",
    // },
    {
      name: "Contributor Main",
      path: "/contributor/main",
      // icon: "ri-file-list-line",
    },
    {
      name: "Own IMG",
      path: `/contributor/IMG`,
      // icon: "ri-user-line",
    },
    {
      name:'All Images',
      path:'/img/all'
    }
  ];

  const adminMenu = [
    {
      name: "All Img",
      path: "/admin/img/all",
      // icon: "ri-home-line",
    },
    {
      name: "Contributor",
      path: "/admin/contributor/list",
      // icon: "ri-user-line",
    },
    {
      name: "User",
      path: "/admin/user",
      // icon: "ri-user-star-line",
    },
    // {
    //   name: "Profile",
    //   path: "/profile",
    //   // icon: "ri-user-line",
    // },
  ];

  const menu = (isAdmin, isContributor) =>{

    if(isAdmin == "true"){
      return adminMenu
    }else if(isContributor == "true"){
      return contributorMenu
    }
    else{
      return userMenu
    }

  }

  const role = (isAdmin, isContributor) =>{

    if(isAdmin == "true"){
      return "Admin"
    }else if(isContributor == "true"){
      return "Contributor"
    }
    else{
      return "User"
    }

  }

  const name = localStorage.getItem('name')
  const isAdmin = localStorage.getItem('isAdmin')
  const isContributor = localStorage.getItem('isContributor')
  const menuToBeRendered = menu(isAdmin,isContributor);

  // console.log(menuToBeRendered);
  // console.log( typeof(isAdmin), isContributor);
  const roleName = role(isAdmin,isContributor)
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <h1 className="logo">{name}</h1>
            <h1 className="role">{roleName}</h1>
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              // const isActive = location.pathname === menu.path;
              return (
                <div
                  // className={`d-flex menu-item ${
                  //   isActive && "active-menu-item"
                  // }`}
                >
                  {/* <i className={menu.icon}></i> */}
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              {/* <i className="ri-logout-circle-line"></i> */}
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header">
            {collapsed ? (
              <i
                // className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              >Menu</i>
            ) : (
              <i
                // className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              >Close</i>
            )}

            {/* <div 
            // className="d-flex align-items-center px-4"
            >
              <button
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </button>

              <Link className="anchor mx-2" to="/profile">
                {user?.name}
              </Link>
            </div> */}
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
