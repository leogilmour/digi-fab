"use client";

import { H3 } from "../../../components/headers";
import { Hr } from "../../../components/spacers";

export default function Page() {
  return (
    <div className="m-auto max-w-7xl p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-3 text-center text-3xl">My dream workshop</h1>
      <h2 className="text-df-shade-lighter mb-8 text-center text-xl">
        <i>A list of things to acquire</i>
      </h2>
      <Hr />
      <br />
      <H3>Electronics tools</H3>
      <ul>
        <li>
          Diagonal cutters (useful for trimming all sorts, 3D printed supports,
          wire bits, sharp bits)
        </li>
        <li>Lengths of wire</li>
        <li>Wire cutter and stripper</li>
        <li>Soldering iron</li>
        <li>Ventilator</li>
        <li>Breadboards</li>
        <li>Protoboards</li>
        <li>Microcontrollers</li>
        <li>Resistors</li>
        <li>Capacitors</li>
        <li>LEDs</li>
        <li>Motors</li>
        <li>Socket-socket wires</li>
        <li>Pin-socket wires</li>
        <li>Heat gun</li>
        <li>Shrink wrap for wire ends over solder</li>
        <li>Multimeter</li>
        <li>Power supply</li>
      </ul>
      <br />
      <H3>Moulding and casting tools</H3>
      <ul>
        <li>Silicon moulding compound</li>
        <li>Resin casting compound (crystal clear)</li>
        <li>Blue wax blocks</li>
        <li>Wax carving tools</li>
        <li>CNC machine like the SRM-20 $$$$$</li>
      </ul>
      <br />
      <H3>3D Printer and Laser Cutter</H3>
      <ul>
        <li>Prusa 3D printer (SLA) $$$</li>
        <li>Laser cutter $$$$$ for cardboard, ply, and acrylic</li>
      </ul>
      <br />
      <H3>Hand Tools</H3>
      <ul>
        <li>Digital calipers</li>
        <li>Screw drivers, alan keys</li>
        <li>Drill bits</li>
        <li>Drill</li>
        <li>M3 nuts and screws etc</li>
        <li>Metre rule</li>
      </ul>
      <br />
      <H3>Software</H3>
      <ul>
        <li>
          Fusion 360 (CAD software: save as dxf for laser cutting or mesh for 3D
          printing)
        </li>
        <li>Arduino IDE (programming software)</li>
        <li>PrusaSlicer (3D printing software)</li>
        <li>Rhino (laser cutter)</li>
        <li>Inkscape (vinyl cutter)</li>
      </ul>
    </div>
  );
}
