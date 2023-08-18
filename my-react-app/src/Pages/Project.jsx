// import React from 'react'
// import Header from '../Components/Header'
// import { BallTriangle  } from  'react-loader-spinner'
// import { useState, useEffect } from 'react';

// const Project = () => {
//   const [showLoader, setShowLoader] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);


//   return (
//     <>
    
//        {showLoader ? (
//         <div className="loader">
//          <BallTriangle
//   height={100}
//   width={100}
//   radius={5}
//   color="#4fa94d"
//   ariaLabel="ball-triangle-loading"
//   wrapperClass={{}}
//   wrapperStyle=""
//   visible={true}
// />
//         </div>
//       ) : (
//         <div>
        
//     <Header />
    
//     <h1 className='text-center text-[2rem]'>my  projects</h1>
//     <section className='flex justify-center space-x-10 flex-wrap'>


//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1692062023/joj_hralbj.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691959445/port2_elzjcp.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1692062023/jo_mjozbu.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     <section className=" relative Display  ">
//       <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay ' >
//         <div className='  absolute   opacity-0 top-[-2rem]  w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
//           <h4 className='text-center py-28'> <a href=""> visit site  <span><i class="ri-external-link-line"></i></span></a></h4>
//         </div>
//       <div className='w-[320px] h-[200px] rounded-[10px]  '  >
// <img src="https://res.cloudinary.com/durbee4ln/image/upload/v1691959694/proj3_bcaqxw.png" alt="project" 
//  className=' w-[100%] rounded-[10px]'/>
//  <p>hello</p>
//       </div>

//       </div>
//     </section>
   
//     </section>
  
//           </div>
//     </>
//   )
// }

// export default Project
import React from 'react';
import Header from '../Components/Header';
import { InfinitySpin } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

const Project = () => {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691956336/port_k7z5xv.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1692062023/joj_hralbj.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1692062023/jo_mjozbu.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691959445/port2_elzjcp.png", description: "hello" },
        { imgUrl: "https://res.cloudinary.com/durbee4ln/image/upload/v1691959694/proj3_bcaqxw.png", description: "hello" }
    ];

    return (
        <>
            {showLoader ? (
                <div className="loader ">
                    <InfinitySpin
                        height={400}
                        width={400}
                        radius={5}
                        color="#2f84e4"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            ) : (
                <div>
                    <Header />
                    <h1 className='text-center text-[2rem]'>my projects</h1>
                    <section className='flex justify-center space-x-10 flex-wrap'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </section>
                </div>
            )}
        </>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <section className="relative Display">
            <div className='w-[20rem] h-[15rem] rounded-[10px] bg-slate-50 projectDisplay'>
                <div className='absolute opacity-0 top-[-2rem] w-full bottom-0 left-0 right-0 bg-slate-50 projectHover'>
                    <h4 className='text-center py-28'>
                        <a href="">visit site <span><i className="ri-external-link-line"></i></span></a>
                    </h4>
                </div>
                <div className='w-[320px] h-[200px] rounded-[10px]'>
                    <img src={project.imgUrl} alt="project" className='w-[100%] rounded-[10px]' />
                    <p>{project.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Project;
