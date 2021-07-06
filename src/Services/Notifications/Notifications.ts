import {Notyf} from "notyf";

// For smooth and friendly notifications
class Notify {

    // TODO -- Fix Notifications; Fix notifications on success not fading out; Fix notifications on error not showing at all.
    private notification = new Notyf({duration: 4000, position: {x: "left", y: "top"}});

    private static extractMessage(err: any): string {

        if (typeof err === "string") {
            return err;
        }

        if (typeof err?.response?.data?.message === "string") {
            return err.response.data.message;
        }

        if (typeof err?.response?.data === "string") {
            return err.response.data;
        }

        if (Array.isArray(err?.response?.data)) {
            return err.response.data[0];
        }

        if (typeof err?.message === "string") {
            return err.message;
        }

        return "Something went wrong, please try again.";
    }

    public success(message: string) {
        this.notification.success(message);
    }

    public error(err: any) {
        const message = Notify.extractMessage(err);
    }
}

const notify = new Notify();

export default notify;