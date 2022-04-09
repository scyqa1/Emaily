const sendgrid = require('sendgrid');
const help = sendgrid.mail;
const keys = require(/../config/keys);

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content) {
        super();

        this.from_email = new helper.Email('scyqa27@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(recipients){
        return recipients.map(({email}) => {
            return new help.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.trackingSettings();
        const clickTracking = new helper.clickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }


}


module.exports = Mailer; 