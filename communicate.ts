//% weight=100 color=#0fbc11 icon="\uf1eb" block="My Custom Extension"
namespace myCustomExtension {
    /**
     * Display a message on the device.
     * @param message The message to display.
     */
    //% block="show message %message"
    export function showMessage(message: string): void {
        game.splash(message);
    }
}
