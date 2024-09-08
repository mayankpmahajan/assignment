import React, { useState } from 'react'

const Members = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const members = [
      { name: "Aditi Sharma", designation: "Marketing Head", url: "./icons/user.png", contact: "+91 9418208685", email: "Aditi2121@jawar.com"},
      { name: "Mehak Sharma", designation: "Marketing Head", url: "./icons/user.png", contact: "+91 9418208685", email: "Aditi2121@jawar.com" },
      { name: "Akshay Sharma", designation: "Marketing Head", url: "./icons/user.png", contact: "+91 9418208685", email: "Aditi2121@jawar.com" },
      
     // Add more events if needed
    ];
  
    // Show first 3 items initially; rest will be shown when expanded
    const visibleMembers = isExpanded ? members : members.slice(0, 3);
  
    // Determine if more items are left to show
    const hasMoreToShow = visibleMembers.length < members.length;
  
    return (
      <main className="bg-white w-full rounded-xl mt-4 p-4">
        <h1 className="text-xl font-semibold">Members</h1>
  
        <div className="flex flex-col space-y-4">
          {visibleMembers.map((event, index) => (
            <section key = {index} className='flex flex-row space-x-2'>
              <div className="h-16 w-16 rounded-full">
                  <img src={event.url} alt="logo 1" className='h-full w-full object-cover rounded-full'/>
              </div>
            
  
            <div className='flex flex-col justify-center space-y-1'>
                <h1 className='text-sm font-medium'>{event.title}</h1>
                <h5 className='text-xs'>{event.date}</h5>
            </div>
        </section>
          ))}
  
          {/* Show the button only if there are more items to display */}
          {hasMoreToShow && (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-500 text-sm font-medium mt-2"
            >
              View More
            </button>
          )}
  
          {/* Show 'View Less' button when expanded */}
          {isExpanded && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-blue-500 text-sm font-medium mt-2"
            >
              View Less
            </button>
          )}
        </div>
      </main>
    );
}

export default Members