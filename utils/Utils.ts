import React from "react";

class Utils {
    // static readTimestamp(durationMillis: any): React.SetStateAction<number> {
    //   throw new Error("Method not implemented.");
    // }
    static readTimestamp(seconds: number) {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.round(seconds % 60);
        return [
            h,
            m > 9 ? m : (h ? '0' + m : m || '0'),
            s > 9 ? s : '0' + s
        ].filter(Boolean).join(':');
    }

}
export default Utils;