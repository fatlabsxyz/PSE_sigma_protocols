import { bytesToNumberBE, bytesToHex } from "@noble/curves/utils.js";
import { secp256k1 } from '@noble/curves/secp256k1.js';

const { Gx, Gy } = secp256k1.Point.CURVE();

// Points must be constructed in the projective representation.  For points that are not
// the identity of the group (called the zero point) (x,y,z) = (coord_x, coord_y, 1)
const g = new secp256k1.Point(Gx, Gy, 1n);

async function main() {
  console.log('Running main');

    const x = 90238293n;
    const y = g.multiply(x).toAffine();

    console.log("x:", x);
    console.log("y:", y);

  // Group operation between G and G (called "+" or "*")
  const g_op_g = g.add(g);  

  // Repetition of the group operation for the same element (called "*" or "^" resp.)
  const g_op_repeated_2 = g.multiply(2n);  

  console.log(" g (+ or *) g", g_op_g.toAffine());
  console.log(" g (* or ^) 2", g_op_repeated_2.toAffine());
}

; (async () => {

  await main();

})();
