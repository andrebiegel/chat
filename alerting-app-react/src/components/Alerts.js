import { useEffect , useState} from "react"
import Alert from './Alert'

function Alerts({url}) {
    const [alerts, setAlerts] = useState([])
    console.log(url)
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => {
            setAlerts(data)
            console.log(data)
        })
        return () => {
        }
    }, [url])
    return (
        <div>
         {alerts  && alerts.map((alert) => (<Alert key={alert.id} item={alert}/> ))}
        
        </div>
    )
}

export default Alerts
