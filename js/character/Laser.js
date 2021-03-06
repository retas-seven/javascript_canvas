/**
 * レーザー
 */
class Laser extends CharacterBase {
    /**
     * 表示するフレーム数
     */
    static get TOTAL_FRAME() {
        return 8;
    }

    /**
     * 初期化
     */
    constructor(x, y) {
        super(x, y);

        // 左レーザーを射出する座標(lX, lY)
        this.lX = - 40;
        this.lY = HEIGHT + 50;

        // 右レーザーを射出する座標(rX, rY)
        this.rX = WIDTH + 40;
        this.rY = HEIGHT + 50;

        // 描画する際のR,G,B,アルファ値
        this.r = 255;
        this.g = 100;
        this.b = 0;
        this.a = 1.0;
    }

    run() {
        if (Laser.TOTAL_FRAME < this.elapseFrm) {
            this.isEnd = true;
        }
    }

    draw() {
        front.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;

        // 左レーザー
        front.beginPath();
        front.moveTo(this.x - 1, this.y);
        front.lineTo(
            this.x - ((this.x - this.lX) / this.elapseFrm)
            , this.y + ((this.lY - this.y) / this.elapseFrm)
        );
        front.lineTo(
            this.x - ((this.x - this.lX) / this.elapseFrm)
            , this.y + ((this.lY - this.y) / this.elapseFrm) + (15 / this.elapseFrm)
        );
        front.closePath();
        front.fill();

        // 右レーザー
        front.beginPath();
        front.moveTo(this.x + 1, this.y);
        front.lineTo(
            this.x + ((this.rX - this.x) / this.elapseFrm)
            , this.y + ((this.rY - this.y) / this.elapseFrm)
        );
        front.lineTo(
            this.x + ((this.rX - this.x) / this.elapseFrm)
            , this.y + ((this.rY - this.y) / this.elapseFrm) + (15 / this.elapseFrm)
        );
        front.closePath();
        front.fill();

        if (0.0 <= this.a) {
            this.a -= 0.1;
        }
    }
}