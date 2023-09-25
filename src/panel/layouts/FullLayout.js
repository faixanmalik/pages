import React from "react";
import { Container } from "reactstrap";
import Sidebar from "./sidebars/vertical/Sidebar";

// this line is remove the useLayoutEffect error
React.useLayoutEffect = React.useEffect 

const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-white ${
            !open ? "" : "showSidebar"
          }`}
        >
          <Sidebar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea bg-slate-50">

          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;


// import React from "react";
// import { Container } from "reactstrap";
// import Sidebar from "./sidebars/vertical/Sidebar";

// // this line is remove the useLayoutEffect error
// React.useLayoutEffect = React.useEffect 

// const FullLayout = ({ children }) => {
//   const [open, setOpen] = React.useState(false);
//   const showMobilemenu = () => {
//     setOpen(!open);
//   };

//   return (
//     <main>
//       <div className="pageWrapper d-md-block d-lg-flex">
//         {/******** Sidebar **********/}
//         <aside
//           className={`sidebarArea shadow bg-white ${
//             !open ? "" : "showSidebar"
//           }`}
//         >
//           <Sidebar showMobilemenu={() => showMobilemenu()} />
//         </aside>
//         {/********Content Area**********/}

//         <div className="contentArea bg-slate-100">

//           {/********Middle Content**********/}
//           <Container className="wrapper" fluid>
//             <div>{children}</div>
//           </Container>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default FullLayout;
