import { useAppContext } from "../../context/AppContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StartMenu() {
    const { startGame, start } = useAppContext();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            startGame(); // trigger after animation
        }, 500); // duration must match exit animation
    };

    return (
        <AnimatePresence>
            {!start && !clicked &&
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-1/2 absolute z-10  h-full flex items-center justify-center flex-col"
                >
                    <div className="rounded-lg text-center bg-gray-800 p-8 cursor-pointer" onClick={handleClick}>
                        <span className="font-bold text-2xl md:text-4xl p-8">Start Experience</span>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default StartMenu;
