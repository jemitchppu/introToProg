self.addEventListener('notificationclose', event => {
    console.log('Notification Closed', event)
})

self.addEventListener('notificationclick', event => {
    if (event.action === "search"){
        const githubUser = event.notification.data.githubUser;
        clients.openWindow('https://github.com/${githubUser}');
    } else if (event.action === "close") {
        clients.openWindow('https://pointpark.edu');
    }
    console.log('Notification Clicked', event.notification.data)
})

