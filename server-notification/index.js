const Expo = require('expo-server-sdk').default;
const expo = new Expo();

const TOKEN =  "";

sendNotification(TOKEN);

async function sendNotification(token) {
    if(Expo.isExpoPushToken(token)) {
        const notificationResponse = await expo.sendPushNotificationsAsync([
            {
                to: token,
                sound: 'default',
                title: 'Info météo',
                body: 'Salut du serveur',
                data: { url: 'https://example.com/weather' },
            },
        ])
        console.log(notificationResponse);
    } else {
        console.error('token invalide');
    }
}




