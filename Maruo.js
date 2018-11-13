/**
 * キャラクタ：円
 */
class Maruo extends CharacterBase {
    /**
     * 初期化
     */
    constructor(x, y, dx, dy) {
        super();
        this.x = x;
        this.y = y;
    }

    run() {

    }

    draw() {
        // 円を描く
        front.beginPath();
        front.fillStyle = this.color;
        front.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        front.fill();
    }

    leftClick() {
        // 進行方向を反転
        this.dx = -this.dx;
        this.dy = -this.dy;
    }
}