import { Component, Renderer, ElementRef, ViewChild } from "@angular/core";
@Component({
	selector: "back-to-top",
	template: `
		<div id="backToTop" #backToTop>    		
    		<a href="javascript:;"><span></span></a>    		
		</div>
	`,
	styles: [require('./backToTop.component.less')]
})
export class BackToTop {
	private speed: number = 10;
	@ViewChild('backToTop') backToTop: ElementRef;

	constructor(el: ElementRef, renderer: Renderer) {
		renderer.listen(el.nativeElement, 'click', () => {
			let stopY: number = 0;
			let startY: number = pageXOffset || 0;
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
			let step = Math.round(distance / 25);
			let leapY = stopY > startY ? startY + step : startY - step;
			let _func = (_step: number, _reverse: boolean)=> {
				leapY = _reverse ? (leapY - step) : (leapY + step);
				let newStep = _reverse ? (_step - step) : (_step + step);
				if (_reverse ? (leapY < stopY) : (leapY > stopY)) {
					leapY = stopY
				}
				if (_reverse ? (_step > stopY) : (_step < stopY)) {
					setTimeout(()=> {
						window.scrollTo(0, leapY);
						_func(newStep, _reverse);
					}, this.speed);
				}
			};
			_func(startY, (stopY < startY));
		});

		window.addEventListener('scroll', function () {
			renderer.setElementClass(this.backToTop,
				'show', (window.pageYOffset > 100));
		});
	}
}