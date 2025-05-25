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
                    className="absolute z-10  h-full  left-1/4 flex items-center justify-center flex-col"
                >
                    <button className="rounded-lg " onClick={handleClick}>Start Experience</button>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default StartMenu;
