/**
 * キャラクタ
 */
class Maruo extends CharacterBase {
    /**
     * 使用する画像名
     */
    static get IMAGE_NAME() {
        return ["./img/maruo_1.png", "./img/maruo_2.png","./img/maruo_3.png"];
    }

    /**
     * １つの画像を表示するフレーム数
     */
    static get DRAW_FRAME() {
        return 3;
    }

    /**
     * 使用する画像を読み込む
     */
    static loadImage() {
        /*
        let img = new Image() ;
        img.src = Maruo.IMAGE_NAME;
        state.cm.characterImageMap.set(Maruo.IMAGE_NAME, img);
        */
        for (let imgName of Maruo.IMAGE_NAME) {
            let img = new Image() ;
            img.src = imgName;
            state.cm.characterImageMap.set(imgName, img);
        }
    }

    /**
     * 初期化
     */
    constructor(x, y, dx, dy) {
        super();
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.boundCnt = 0;
        this.imgIndex = 0;
        this.frameCnt = 0;

        // TODO 画像読み込みを待つ処理を作成する必要あり？
        /*
        let tmp = state.cm.characterImageMap.get(Maruo.IMAGE_NAME);
        this.width = tmp.width;
        this.height = tmp.height;
        */
    }

    run() {
        this.x += this.dx;
        this.y += this.dy;

        if ((WIDTH - this.width) < this.x) {
            this.x = (WIDTH - this.width);
            this.dx = -this.dx;
            this.boundCnt++;
        } else if (this.x < 0) {
            this.x = 0;
            this.dx = -this.dx;
            this.boundCnt++;
        }
        if ((HEIGHT - this.height) < this.y) {
            this.y = (HEIGHT - this.height);
            this.dy = -this.dy;
            this.boundCnt++;
        } else if (this.y < 0) {
            this.y = 0;
            this.dy = -this.dy;
            this.boundCnt++;
        }

        // 規定回数バウンドしたらキャラクタの終了フラグを立てる
        if (this.boundCnt == 7) {
            this.isEnd = true;
        }

        // 描画する画像の調整
        if (Maruo.DRAW_FRAME <= this.frameCnt) {
            this.imgIndex++;
            this.frameCnt = 0;
            if (Maruo.IMAGE_NAME.length <= this.imgIndex) {
                this.imgIndex = 0;
            }
        }
        this.frameCnt++;
    }

    draw() {
        front.drawImage(
            state.cm.characterImageMap.get(Maruo.IMAGE_NAME[this.imgIndex])
            , this.x
            , this.y
        );
    }

    leftClick() {
        
    }
}