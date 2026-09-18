
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

/**
 * カスタムブロック
 */
//% weight=100 color=#87cefa icon="⚲"
namespace リモコン扇風機 {
    let on: number[] = [2383, 2786, 709, 930, 755, 970, 717, 2035, 691, 1968, 757, 2010, 716, 2015, 712, 970, 715, 972, 714, 14486, 74315, 54138, 2469, 2779, 708, 915, 771, 933, 752, 2012, 712, 1972, 753, 1952, 780, 1958, 767, 969, 734, 958, 714, 16572, 76529, 54158, 2430, 2722, 773, 966, 719, 965, 719, 1961, 763, 2012, 713, 2007, 717, 1974, 749, 965, 720, 923, 775, 18798]
    let off: number[] = [2552, 2660, 831, 850, 827, 1901, 789, 895, 791, 894, 792, 1935, 791, 895, 831, 1907, 836, 1896, 775, 16832, 76833, 54123, 2535, 2678, 822, 857, 792, 1935, 829, 861, 827, 858, 791, 1935, 827, 859, 792, 1937, 789, 1944, 791, 19066, 78998, 54107, 2501, 2711, 786, 897, 790, 1933, 793, 895, 791, 899, 787, 1940, 787, 901, 784, 1941, 829, 1890, 833, 21374, 81257, 54087, 2544, 2662, 829, 857, 829, 1897, 831, 855, 792, 894, 792, 1937, 826, 865, 800, 1921, 791, 1938, 824, 13491]

    /**
    * ライトの電源をONにします。
    */
    //% block
    export function 電源を入れる(): void {
        let r = 0
        let list: number[] = []

        list = on;
        basic.pause(100)
        //for (let n = 0; n < 2; n++) {
        for (let i = 0; i <= list.length - 1; i++) {
            // Generate flashing signal
            if (i % 2 == 1) {
                // LED turns off
                control.waitMicros(list[i])
            } else {
                // LED flashes at 38 kHz cycle
                r = list[i]
                while (r > 26) {
                    pins.digitalWritePin(DigitalPin.P1, 1)
                    control.waitMicros(2)
                    pins.digitalWritePin(DigitalPin.P1, 0)
                    r = r - 26
                }
            }
        }
        //}
        basic.showString("1")
        basic.pause(100)
        basic.clearScreen()
    }

    /**
    * コンセントの電源をOFFにします。
    */
    //% block
    export function 電源を消す(): void {
        let r = 0
        let list: number[] = []

        list = off
        basic.pause(100)
        for (let n = 0; n < 2; n++) {
            for (let i = 0; i <= list.length - 1; i++) {
                // Generate flashing signal
                if (i % 2 == 1) {
                    // LED turns off
                    control.waitMicros(list[i])
                } else {
                    // LED flashes at 38 kHz cycle
                    r = list[i]
                    while (r > 26) {
                        pins.digitalWritePin(DigitalPin.P1, 1)
                        control.waitMicros(2)
                        pins.digitalWritePin(DigitalPin.P1, 0)
                        r = r - 26
                    }
                }
            }
        }
        basic.showString("0")
        basic.pause(100)
        basic.clearScreen()
    }
}
