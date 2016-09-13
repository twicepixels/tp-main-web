import { Component, Renderer, ElementRef, ViewChild } from "@angular/core";
@Component({
	selector: "back-to-top",
	template: `
		<div id="backToTop" #backToTop>
    		<button>
    			<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        		Top
    		</button>
		</div>
	`,
	styles: [require('./backToTop.component.less')]
})
export class BackToTop {
	@ViewChild('backToTop') backToTop: ElementRef;
	private speed: number = 1000;

	constructor(el: ElementRef, renderer: Renderer) {
		renderer.listen(el.nativeElement, 'click', () => {
			// Do something with 'event'
			console.log("click rise");
			let stopY: number = 0;
			var startY: number = pageXOffset || 0;
			if (document.documentElement && document.documentElement.scrollTop) {
				startY = document.documentElement.scrollTop;
			} else if (document.body.scrollTop) {
				startY = document.body.scrollTop;
			}
			let distance: number = stopY > startY ? stopY - startY : startY - stopY;
			if (distance < 100) {
				scrollTo(0, stopY);
				return;
			}
			let speed: number = Math.round(this.speed / 100);
			let step: number = Math.round(distance / 25);
			let leapY: number = stopY > startY ? startY + step : startY - step;
			let timer: number = 0;
			if (stopY > startY) {
				for (let i = startY; i < stopY; i += step) {
					setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
					leapY += step;
					if (leapY > stopY) leapY = stopY;
					timer++;
				}
				return;
			}
			for (let j = startY; j > stopY; j -= step) {
				setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
				leapY -= step;
				if (leapY < stopY) leapY = stopY;
				timer++;
			}
		});
		
		window.addEventListener('scroll', function () {
			renderer.setElementClass(this.backToTop,
				'show', (window.pageYOffset > 0));
		});
	}
}