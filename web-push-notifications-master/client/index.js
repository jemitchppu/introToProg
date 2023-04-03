const client = (() => {
    let serviceWorkerRegObj = undefined;
    const notificationbutton = document.getElementById("btn-notify");

    const showNotificationButton = () => {
        notificationbutton.style.display = "block";
    }

    const checkNotificationSupport = () => {
        if(!("Notification" in window)){
            return Promise.reject("This browser doesn't support notifications.")
        }
        console.log("The browser supports Notifications.")
        return Promise.resolve("OK");
    }

    const registerServiceWorker = () => {
        if(!("Serviceworker") in navigator){
            return Promise.reject("Service worker is not available")
    }

    return navigator.serviceWorker.register("service-worker.js")
    .then(regObj => {
        console.log("service worker is registered successfully");
        serviceWorkerRegObj = regObj;
        showNotificationButton();
    })
}

const requestNotificationPermissions = () => {
    return Notification.requestPermission(status => {
        console.log("Notifications permission status:", status);
    })
}


    //How the constructors are called
    checkNotificationSupport()
        .then(registerServiceWorker)
        .then(requestNotificationPermissions)
        .catch(err => console.error(err))


})