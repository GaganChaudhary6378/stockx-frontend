// "use client";
// import React, { useEffect, useState } from "react";
// import io from 'socket.io-client';
// import { IoMdArrowRoundForward } from "react-icons/io";
// import ReactTyped from "react-typed"; // Corrected import
// import { useRouter } from "next/navigation";
// const socket = io("http://localhost:8000"); // Initialize socket outside component

// export default function UserChat({ content }) { // Destructure content from props
//     const [userQuery, setUserQuery] = useState(content); // Initialize state with content
//     const [loading, setLoading] = useState(false);
//     const [responseMessage, setResponseMessage] = useState([]);
//     const [contentString, setContentString] = useState(""); // Use state for contentString
//     const router = useRouter();


//     console.log(userQuery);

//     useEffect(() => {
//         // Set up event listener for 'chat message' event from server
//         socket.on('chat message', (msg) => {
//             if (msg.content) {
//                 setContentString(prev => prev + msg.content);
//                 setResponseMessage(prev => {
//                     const lastMessage = prev[prev.length - 1];
//                     if (lastMessage && lastMessage.role === 'bot') {
//                         return [...prev.slice(0, -1), { ...lastMessage, content: lastMessage.content + msg.content }];
//                     } else {
//                         return [...prev, { role: 'bot', content: msg.content }];
//                     }
//                 });
//             }
//         });

//         // Clean up socket event listener when component unmounts
//         return () => {
//             socket.off('chat message');
//         };
//     }, []);


//     console.log(responseMessage)
//     useEffect(() => {
//         sendMessage();
//     }, [content.content , loading]);

//     const sendMessage = async () => {
//         try {
//             if (!userQuery) return; // Handle empty message case

//             setLoading(true);
//             const userMessage = {
//                 "role": "user",
//                 "content": userQuery,
//             };
//             console.log(userQuery, "aa rhi hai");
//             setResponseMessage(prev => [...prev, userMessage]); // Append user messager

//             const response = await fetch("http://localhost:8000/api/v1/users/getStockInfo", {
//                 method: "POST", // Adjust to POST if your logic requires it.
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     question: userQuery, // Send your question data in the body
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             setLoading(false);
//             setUserQuery(""); // Clear input field

//         } catch (error) {
//             console.error("Error sending query:", error);
//             setLoading(false); // Reset loading state on error
//         }
//     };

//     return (
//         <div className="flex flex-col justify-start items-center min-h-screen w-screen gap-4 bg-black text-white">
//             <div className="bg-hero flex flex-col justify-between items-center w-full pt-[10rem]">
//                 This is my main chat page
//                 <div>
//                     {responseMessage.map((msg, index) => (
//                         <p key={index} className={msg.role === 'bot' ? "text-green-500" : "text-blue-500"}>
//                             {msg.content}
//                         </p>
//                     ))}
//                 </div>
//                 <textarea
//                     placeholder="Enter your query here"
//                     // value={userQuery}
//                     onChange={(e) => setUserQuery(e.target.value)}
//                     className="outline-none flex-grow h-auto bg-transparent font-bold font-mono text-black resize-none"
//                     rows={1}
//                     onInput={e => {
//                         e.target.style.height = 'auto';
//                         e.target.style.height = `${e.target.scrollHeight}px`;
//                     }}
//                 />
//                 {/* <IoMdArrowRoundForward className="text-2xl text-black font-bold ml-4" onClick={sendMessage} /> */}
//             </div>
//         </div>
//     );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import io from 'socket.io-client';
// import { IoMdArrowRoundForward } from "react-icons/io";
// import ReactTyped from "react-typed"; // Corrected import


// const socket = io("http://localhost:8000"); // Initialize socket outside component

// export default function UserChat({ content }) { // Destructure content from props
//     const [userQuery, setUserQuery] = useState(content); // Initialize state with content
//     const [loading, setLoading] = useState(false);
//     const [responseMessage, setResponseMessage] = useState([]);
//     const [currentMessage, setCurrentMessage] = useState(""); // State to hold the current message



//     useEffect(() => {
//         setUserQuery(content);
//     }, [content]);

//     useEffect(() => {
//         // Set up event listener for 'chat message' event from server
//         socket.on('chat message', (msg) => {
//             setCurrentMessage(prev => prev + msg.content + ' '); // Append new chunk to current message
//         });

//         // Clean up socket event listener when component unmounts
//         return () => {
//             socket.off('chat message');
//         };
//     }, []);

//     useEffect(() => {
//         if (userQuery && !loading) {
//             sendMessage();
//         }
//     }, [userQuery, loading]); // Run useEffect when userQuery or loading state changes

//     console.log(responseMessage);
//     console.log(currentMessage);
//     const sendMessage = async () => {
//         try {
//             setLoading(true);
//             const userMessage = {
//                 "role": "user",
//                 "content": userQuery,
//             };
//             setResponseMessage(prev => [...prev, userMessage]); // Append user message to responseMessage

//             const response = await fetch("http://localhost:8000/api/v1/users/getStockInfo", {
//                 method: "POST", // Adjust to POST if your logic requires it.
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     question: userQuery, // Send your question data in the body
//                 }),
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             setLoading(false);
//             setUserQuery(""); // Clear input field

//         } catch (error) {
//             console.error("Error sending query:", error);
//             setLoading(false); // Reset loading state on error
//         }
//     };

//     return (
//         <div className="flex flex-col justify-start items-center min-h-screen w-screen gap-4 bg-black text-white">
//             <div className="bg-hero flex flex-col justify-between items-center w-full pt-[10rem]">
//                 This is my main chat page
//                 <div>
//                     {responseMessage.map((msg, index) => (
//                         <p key={index} className={msg.role === 'bot' ? "text-green-500" : "text-blue-500"}>
//                             {msg.content}
//                         </p>
//                     ))}
//                     {/* Display current streaming message */}
//                     <p className="text-blue-500">{currentMessage}</p>
//                 </div>
//                 <textarea
//                     placeholder="Enter your query here"
//                     value={userQuery}
//                     onChange={(e) => setUserQuery(e.target.value)}
//                     className="outline-none flex-grow h-auto bg-transparent font-bold font-mono text-black resize-none"
//                     rows={1}
//                     onInput={e => {
//                         e.target.style.height = 'auto';
//                         e.target.style.height = `${e.target.scrollHeight}px`;
//                     }}
//                 />
//                 <IoMdArrowRoundForward className="text-2xl text-black font-bold ml-4" onClick={sendMessage} />
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import { IoMdArrowRoundForward } from "react-icons/io";
import ReactTyped from "react-typed"; // Corrected import


const socket = io("http://localhost:8000"); // Initialize socket outside component

export default function UserChat({ content }) { // Destructure content from props
    const [userQuery, setUserQuery] = useState(content); // Initialize state with content
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState([]);
    const [currentMessage, setCurrentMessage] = useState(""); // State to hold the current message



    useEffect(() => {
        setUserQuery(content);
    }, [content]);

    useEffect(() => {
        let isMounted = true; // Flag to track if component is mounted

        // Set up event listener for 'chat message' event from server
        socket.on('chat message', (msg) => {
            console.log(msg);

            // Use setTimeout to add delay
            setTimeout(() => {
                if (isMounted) { // Only update state if component is still mounted
                    setCurrentMessage(prev => prev + msg + ' '); // Append new chunk to current message
                    setResponseMessage(prev => [...prev, { role: 'bot', content: msg}]); // Append bot response
                }
            }, 500); // 500ms delay
        });

        // Clean up function
        return () => {
            isMounted = false; // Set flag to false when component unmounts
            socket.off('chat message');
        };
    }, []);


    useEffect(() => {
        if (userQuery && !loading) {
            sendMessage();
        }
    }, [userQuery, loading]); // Run useEffect when userQuery or loading state changes

    const sendMessage = async () => {
        try {
            setLoading(true);
            const userMessage = {
                "role": "user",
                "content": userQuery,
            };
            setResponseMessage(prev => [...prev, userMessage]); // Append user message to responseMessage

            const response = await fetch("http://localhost:8000/api/v1/users/getStockInfo", {
                method: "POST", // Adjust to POST if your logic requires it.
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question: userQuery, // Send your question data in the body
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            setLoading(false);
            setUserQuery(""); // Clear input field

        } catch (error) {
            console.error("Error sending query:", error);
            setLoading(false); // Reset loading state on error
        }
    };

    console.log(responseMessage)

    return (
        <div className="flex flex-col justify-start items-center min-h-screen w-screen gap-4 bg-black text-white">
            <div className="bg-hero flex flex-col justify-between items-center w-full pt-[10rem]">
                This is my main chat page
                <div>
                    {responseMessage.map((msg, index) => (
                        <p key={index} className={msg.role === 'bot' ? "text-green-500 flex flex-row" : "text-blue-500"}>
                            {msg.content}
                        </p>
                    ))}
                    {/* Display current streaming message */}
                    <p className="text-blue-500">{currentMessage}</p>
                </div>
                <textarea
                    placeholder="Enter your query here"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    className="outline-none flex-grow h-auto bg-transparent font-bold font-mono text-black resize-none"
                    rows={1}
                    onInput={e => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                />
                {/* <IoMdArrowRoundForward className="text-2xl text-black font-bold ml-4" onClick={sendMessage} /> */}
            </div>
        </div>
    );
}

