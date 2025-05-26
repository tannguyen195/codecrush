import { useAppContext } from "../../context/AppContext";

function MobileJoyStick() {

    const { setIsWalking, setIsSprinting } = useAppContext();

    const handlePointerWalkDown = (event: React.PointerEvent<HTMLButtonElement>) => {
        event.preventDefault();

        // Logic to start walking
        setIsWalking(true);
    };
    const handlePointerWalkUp = (event: React.PointerEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Logic to stop walking
        setIsWalking(false);
    };
    const handlePointerSprintDown = (event: React.PointerEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Logic to start sprinting
        setIsSprinting(true);
    };
    const handlePointerSprintUp = (event: React.PointerEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Logic to stop sprinting
        setIsSprinting(false);
    };

    return (
        <div className="w-full absolute transform -translate-y-1/2 bottom-16 z-10 flex items-center justify-center ">
            <div className="joystick">
                <div className="joystick-inner"></div>
            </div>
            <div className="flex items-center justify-around w-full">
                <button onPointerDown={handlePointerWalkDown} onPointerUp={handlePointerWalkUp} className="rounded-full w-[50px] h-[50px]"></button>
                <button onPointerDown={handlePointerSprintDown} onPointerUp={handlePointerSprintUp} className="rounded-full w-[50px] h-[50px]"></button>
            </div>
        </div>
    );
}

export default MobileJoyStick;