import { useRef, useState } from "react"

function MutableRef () {
    const [timer, setTimer] = useState(0)
    const [startResumeTxt, setStartResumeTxt] = useState<'Start' | 'Resume'>('Start')
    const [timerRunning, setTimerRunning] = useState<boolean>(false)
    const intervalRef = useRef<number | null>(null)

    function startTimer() {
        if (timerRunning) return //Prevent the timer from starting if it is already running
        // Change the text of the start timer button from "Start" to "Resume"
        if (startResumeTxt === 'Start') {
            setStartResumeTxt ('Resume')
        }
        // Set the timerRunning flag to true
        setTimerRunning(true)
        // Sets the timer to increase every second
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    function stopTimer() {
        if (intervalRef.current) {
            // Set the timerRunning flag to true
            setTimerRunning(false)
            window.clearInterval(intervalRef.current)
        }
    }

    function resetTimer() {
        if (intervalRef.current) {
            stopTimer()
            setTimer(0)
            setStartResumeTxt ('Start')
        }
    }

    return (
        <div>
            HookTimer:&nbsp;{timer}<br /><br />
            <button onClick={startTimer} disabled={timerRunning}>{startResumeTxt} Timer</button>&nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={stopTimer} disabled={!timerRunning}>Stop Timer</button>&nbsp;&nbsp;&nbsp;&nbsp; 
            <button onClick={resetTimer} disabled={((timer === 0) && (!timerRunning))}>Reset Timer</button>
        </div>
    )
}

export default MutableRef