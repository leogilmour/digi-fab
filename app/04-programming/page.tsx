"use client";
import Image from "next/image";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import { PlainLargeImage } from "../../components/images";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-4 mb-12 text-center text-3xl">
        Week 2 Part 2: Programming
      </h1>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">The Circuit</h3>
      <WideGrid>
        <WideContainer>
          <p>Circuit diagram:</p>
          <div className="my-4">
            <PlainLargeImage
              src="/circuit-diagram.JPG"
              alt="Proposed circuit diagram"
            />
          </div>
        </WideContainer>
        <WideContainer>
          <p>
            For my jewellery carousel prototype, it would be fun if the motor
            can switch directions. This gives the user appropriate control to
            find the jewellery theyʼre looking for.
          </p>
          <br />
          <p>
            To develop the theme of the carousel, I will add LEDs in red and
            yellow. They are going to flash corresponding to the direction.
          </p>
          <br />
          <p>
            If connected in series, the LEDs are very dim. In parallel, they
            receive the same voltage and shine brightly!
          </p>
          <br />
          <p>
            The circuit has two buttons, two sets of LED pairs, and an
            integrated circuit/H-bridge to manage the motor. (The MCU is the box
            in the centre).
          </p>
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">The Programming</h3>
      <WideGrid>
        <WideContainer>
          <p className="w-full text-left font-bold">Set up</p>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`
    int red_led_pin = D0;
    int go_pin = D1;
    int reverse_pin = D2;
    int yel_led_pin = D3;
    int go_val;
    int reverse_val;

    const int A1A = D4;
    const int A1B = D5;

    // setting PWM properties
    const int freq = 5000;
    const int resolution = 8;

    // put your setup code here, to run once:
    void setup() {
        Serial.begin(9600); // for debugging
        
        // LED SET UP
        pinMode(red_led_pin, OUTPUT);
        pinMode(yel_led_pin, OUTPUT);

        // BUTTON SET UP
        pinMode(go_pin, INPUT_PULLUP);
        pinMode(reverse_pin, INPUT_PULLUP);

        // MOTOR SET UP
        pinMode(A1A, OUTPUT);
        pinMode(A1B, OUTPUT);
        digitalWrite(A1A, LOW);
        digitalWrite(A1B, LOW);
    }
    `}
          </SyntaxHighlighter>
        </WideContainer>
        <WideContainer>
          <p className="w-full text-left font-bold">Functions</p>
          <br />
          <p>Function for the LEDs</p>
          <p>
            I want my LEDs to flash. With some tweaking, I found that staying
            lit for half a second and dark for half a second worked the best:
          </p>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void flash_led(int led) {
    if (millis() % 500 >= 250) {
        digitalWrite(led, HIGH);
    } else {
        digitalWrite(led, LOW);
    }
}`}
          </SyntaxHighlighter>
          <br />
          <p>Function for the motor direction</p>
          <p>
            The function accepts a positive or negative integer for its
            argument. Then a simple if statement takes this integer to control
            which direction the motor spins. For some reason, the reverse is
            much slower. I think if I could figure out the{" "}
            <code>ledcWrite()</code> functions, this would work better.
          </p>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void run_motor(int direction) {
  int ledc = A1A;
  int digi = A1B;
  if (direction > 0) {
    ledc = A1B;
    digi = A1A;
  }
  // ledcAttach(ledc, freq, resolution);
  digitalWrite(ledc, HIGH);
  digitalWrite(digi, LOW);
}

void stop_motor() {
  digitalWrite(A1A, LOW);
  digitalWrite(A1B, LOW);
}
                `}
          </SyntaxHighlighter>
        </WideContainer>
        <WideContainer>
          <p>Using functions ensures my loop function is easier to read</p>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void loop() {
    // put your main code here, to run repeatedly:
    
    // YELLOW means go!
    go_val = digitalRead(go_pin);
  
    if (go_val == LOW) {
     flash_led(yel_led_pin);
     run_motor(1);
    } else {
      stop_motor();
      digitalWrite(yel_led_pin, LOW);
    }
  
    // RED means backup!
    reverse_val = digitalRead(reverse_pin);
  
    if (reverse_val == LOW) {
     flash_led(red_led_pin);
     run_motor(-1);
    } else {
      stop_motor();
      digitalWrite(red_led_pin, LOW);
    }
}`}
          </SyntaxHighlighter>
        </WideContainer>
        <WideContainer>
          <p className="w-full text-left font-bold">Ta da!</p>
          <div className="my-4">
            <Image
              src="/circuit-demo.gif"
              alt="Circuit motor driving and corresponding lights flashing"
              unoptimized
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter my-8 text-2xl">Review</h3>
      <WideGrid>
        <WideContainer>
          <p>
            I could not get the reverse direction to work, switching between
            ledc and digital writes... So I gave up and switched them all to
            digital writes. It is fine for switching directions but it does not
            allow me to control the speed.
          </p>
          <br />
          <p>
            TYPICALLY, it has just occurred to me that I was connected to the
            xiao microcontrollers digital only ports instead of one of the 3
            analog ports it has... oops!
          </p>
        </WideContainer>
        <WideContainer>
          <p>
            Initially I planned to have three buttons: go, stop, reverse. But
            when I reviewed the code, I realised they were push buttons, so I
            scrapped the go and stop separate buttons.
          </p>
          <br />
          <p>
            Again, typically, I realised AFTER writing the code, that I could of
            course use them to switch on and off... It doesnʼt need to be
            pressed continually to trigger an event!
          </p>
        </WideContainer>
      </WideGrid>
    </div>
  );
}
