import icon from '../../assets/img/notification-icon.svg' //pasta anterior ..

import './styles.css' //mesma pasta .

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton