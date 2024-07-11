import { inject, injectable } from "@core/di";
import { responsive } from "@core/responsive";
import { Controls } from "controls";
import { Container, Sprite } from "pixi.js";
import { withHp } from "../systems/hp";
import { gsap } from "gsap";
import { withXp } from "../systems/xp";
import { GameTime } from "game/game-time";
import type { Weapon } from "game/weapons";

@injectable
@responsive
export class Player extends withHp(withXp(Container)) {
    private readonly controls = inject(Controls);
    private readonly time = inject(GameTime);

    readonly radius = 30;
    private readonly movementSpeed = 3;
    private readonly constitution = 2;

    weapon?: Weapon;

    @responsive({ scale: 0.3, anchor: 0.5 })
    private readonly spine = Sprite.from("zombie");

    private _moving = false;

    constructor() {
        super();

        this.addChild(this.spine);

        // Animate on hit - tween to red
        this.tintOnHit(this.spine);

        // Animate on death
        this.died.subscribe(() => this.die());

        // Restore hp on level change
        this.levelChanged.subscribe(() => (this.hp = this.maxHp));

        // Subscribe to controls
        this.controls.movementChanged.subscribe(this.onMovementChanged);
        this.controls.onMove(this.move, this.time.ticker);

        this.time.add(() => this.weapon?.tryUse());
    }

    appear() {
        gsap.fromTo(this, { alpha: 0 }, { alpha: 1, duration: 0.5 });
        gsap.fromTo(this.scale, { x: 0, y: 0 }, { x: 1, y: 1, ease: "bounce", duration: 0.5 });
    }

    reset() {
        this.xp = 0;
        this.levelChanged.emit(1);
    }

    get maxHp() {
        return 10 + this.level * this.constitution;
    }

    private set moving(value: boolean) {
        if (this._moving === value) return;
        this._moving = value;

        if (value) this.run();
        else this.idle();
    }

    private run() {
        // this.spine.animate("run", { loop: true });
    }

    private idle() {
        // this.spine.animate("idle", { loop: true });
    }

    private die() {
        // this.spine.animate("death");
    }

    private readonly move = (dx: number, dy: number, dt: number) => {
        this.x += dx * dt * this.movementSpeed;
        this.y += dy * dt * this.movementSpeed;
    };

    private readonly onMovementChanged = ([dx, dy]: [number, number]) => {
        if (dx === 0) {
            if (dy === 0) this.moving = false;
            else this.moving = true;
            return;
        }

        const { x } = this.spine.scale;
        this.spine.scale.x = Math.abs(x) * dx;
        this.moving = true;
    };
}
