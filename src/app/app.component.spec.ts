import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("increase counter", () => {
    const buttonIncrement =
      fixture.nativeElement.querySelector('[id="increment"]');
    buttonIncrement.click();
    fixture.detectChanges();

    const spanCount: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="count"]');
    expect(spanCount.innerHTML).toBe("1");
  });

  it("decrease counter", () => {
    const buttonDecrease =
      fixture.nativeElement.querySelector('[id="decrement"]');
    buttonDecrease.click();
    fixture.detectChanges();

    const spanCount: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="count"]');
    expect(spanCount.innerHTML).toBe("-1");
  });

  it("reset counter", () => {
    const buttonIncrement =
      fixture.nativeElement.querySelector('[id="increment"]');
    buttonIncrement.click();
    fixture.detectChanges();

    const buttonDecrease = fixture.nativeElement.querySelector('[id="reset"]');
    buttonDecrease.click();
    fixture.detectChanges();

    const spanCount: HTMLSpanElement =
      fixture.nativeElement.querySelector('[id="count"]');
    expect(spanCount.innerHTML).toBe("0");
  });
});
