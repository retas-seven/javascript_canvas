/**
 * レーザー
 */
class Laser extends CharacterBase {
    /**
     * 表示するフレーム数
     */
    static get TOTAL_FRAME() {
        return 6;
    }

    /**
     * 初期化
     */
    constructor(x, y) {
        super();
        this.lX = - 20;        // 左レーザーの開始座標X
        this.lY = HEIGHT + 20; // 左レーザーの開始座標Y
        this.rX = WIDTH + 20;  // 右レーザーの開始座標X
        this.rY = HEIGHT + 20; // 右レーザーの開始座標Y
        this.x = x;
        this.y = y;
        this.red = 255;
        this.grn = 100;
        this.blu = 0;
        this.frm = 0;
    }

    run() {
        this.frm++;
        if (Laser.TOTAL_FRAME < this.frm) {
            this.isEnd = true;
        }
    }

    draw() {
        let tmp = "rgb(" + this.red + ", " + this.grn + ", " + this.blu + ")";
        front.strokeStyle = tmp;
        front.beginPath();
        front.moveTo(this.lX + (this.x - this.lX) / Laser.TOTAL_FRAME * this.frm - 1
            , this.y + this.lY / Laser.TOTAL_FRAME * (Laser.TOTAL_FRAME - this.frm));
        front.lineTo(this.x - 2, this.y);
        front.moveTo(this.lX + (
            this.x - this.lX) / Laser.TOTAL_FRAME * this.frm
            , this.y + this.lY / Laser.TOTAL_FRAME * (Laser.TOTAL_FRAME - this.frm));
        front.lineTo(this.x - 2, this.y);
        front.moveTo(
            this.rX + (this.x - this.rX) / Laser.TOTAL_FRAME * this.frm - 1
            , this.y + this.rY / Laser.TOTAL_FRAME * (Laser.TOTAL_FRAME - this.frm));
        front.lineTo(this.x + 2, this.y);
        front.moveTo(
            this.rX + (this.x - this.rX) / Laser.TOTAL_FRAME * this.frm
            , this.y + this.rY / Laser.TOTAL_FRAME * (Laser.TOTAL_FRAME - this.frm));
        front.lineTo(this.x + 2, this.y);
        front.stroke();

        if(this.red != 0) {
            this.red = this.red - this.red / Laser.TOTAL_FRAME;
        }
        if(this.grn != 0) {
            this.grn = this.grn - this.grn / Laser.TOTAL_FRAME;
        }
        if(this.blu != 0) {
            this.blu = this.blu - this.blu / Laser.TOTAL_FRAME;
        }
    }
}