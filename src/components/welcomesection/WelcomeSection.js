import React from "react";
import CreateNav from "../navbar/CreateNav";
// import logo from "../../img/8.jpeg";
import "./WelcomeSection.css";

export default function WelcomeSection() {
	// let x = document.querySelectorAll("#svg-animation path");
	// console.log(x);
	// for (let i = 0; i < x.length; i++) {
	// 	console.log(`letter ${i} is ${x[i].getTotalLength()}`);
	// }

	return (
		<section className="fullpage-section intro gray">
			<h1 className="proffesion">Front-end Developer</h1>

			<div className="image-container">
				<svg
					id="svg-animation"
					width="992"
					height="298"
					viewBox="0 0 992 298"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="path-1-outside-1_1_10"
						maskUnits="userSpaceOnUse"
						x="0.649994"
						y="0.199982"
						width="992"
						height="298"
						fill="black"
					>
						<rect
							fill="white"
							x="0.649994"
							y="0.199982"
							width="992"
							height="298"
						/>
						<path d="M170.85 8.79998C153.25 8.79998 134.85 12.6666 115.65 20.4C96.45 28.1333 79.7833 37.4667 65.65 48.4C51.25 59.0666 39.3833 70.5333 30.05 82.8C20.7167 94.8 16.05 105.2 16.05 114C16.05 130 23.3833 138 38.05 138C55.9167 138 78.45 128.667 105.65 110C132.85 91.3333 150.45 75.6 158.45 62.8C159.783 60.6667 161.117 59.6 162.45 59.6C164.05 59.6 164.85 60.6667 164.85 62.8C162.45 72.9333 153.517 85.2 138.05 99.6C122.85 113.733 105.117 126.267 84.85 137.2C64.3167 147.867 46.7167 153.2 32.05 153.2C13.1167 153.2 3.64999 143.333 3.64999 123.6C3.64999 112.933 8.45 100.667 18.05 86.8C27.65 72.9333 40.05 59.8667 55.25 47.6C70.45 35.0667 88.5833 24.5333 109.65 16C130.983 7.46665 152.05 3.19998 172.85 3.19998C213.117 3.19998 233.25 15.6 233.25 40.4C233.25 53.2 227.783 70.1333 216.85 91.2C206.183 112.267 194.317 132.133 181.25 150.8C168.45 169.467 156.583 188.533 145.65 208C134.983 227.467 129.65 242 129.65 251.6C129.65 261.2 133.783 266 142.05 266C160.183 266 180.85 258.533 204.05 243.6C206.717 226.533 215.517 206.133 230.45 182.4C245.383 158.4 260.85 138.133 276.85 121.6C293.117 104.8 305.117 96.4 312.85 96.4C320.583 96.1333 324.45 99.8667 324.45 107.6C324.45 121.467 313.25 142.533 290.85 170.8C268.717 198.8 243.783 222.8 216.05 242.8V245.6C216.05 263.733 226.05 272.8 246.05 272.8C262.583 272.8 286.317 258.133 317.25 228.8C332.183 214.667 348.45 195.467 366.05 171.2C383.917 146.667 400.717 119.467 416.45 89.6C402.05 99.2 394.05 104 392.45 104C389.517 104 388.05 102.533 388.05 99.6C388.05 96.4 388.583 94.4 389.65 93.6C390.717 92.8 393.25 91.0667 397.25 88.4C408.983 80.6667 416.717 74.5333 420.45 70L433.25 54.4C434.05 52.2666 435.25 51.2 436.85 51.2C440.317 51.7333 442.05 53.0666 442.05 55.2C442.05 56.2666 441.917 57.0666 441.65 57.6L422.05 95.6C413.517 113.2 400.05 134.8 381.65 160.4C363.25 186 346.85 206.933 332.45 223.2C318.05 239.2 302.183 253.067 284.85 264.8C267.783 276.267 252.183 282 238.05 282C214.85 282 203.25 272.267 203.25 252.8V251.6C177.383 267.6 155.383 275.6 137.25 275.6C119.117 275.6 110.05 268.4 110.05 254C110.05 242.533 115.65 226.533 126.85 206C138.317 185.467 150.85 165.867 164.45 147.2C178.05 128.267 190.45 108.4 201.65 87.6C213.117 66.8 218.85 50.5333 218.85 38.8C218.85 18.8 202.85 8.79998 170.85 8.79998ZM312.85 114.4C312.85 109.6 310.05 107.2 304.45 107.2C299.117 107.2 289.917 114.267 276.85 128.4C264.05 142.533 251.517 159.867 239.25 180.4C227.25 200.933 219.917 218.933 217.25 234.4C241.783 216 263.783 194.267 283.25 169.2C302.983 143.867 312.85 125.6 312.85 114.4Z" />
						<path d="M371.416 241.2C355.416 241.2 347.416 237.733 347.416 230.8C347.416 222.533 356.882 212.8 375.816 201.6C394.749 190.133 411.816 184.4 427.016 184.4C434.749 184.4 438.616 186.8 438.616 191.6C438.616 194.267 436.616 197.2 432.616 200.4C428.616 203.6 424.749 206.133 421.016 208C417.282 209.867 415.149 210.8 414.616 210.8C413.016 210.8 411.949 210.133 411.416 208.8C410.882 206.933 412.216 205.067 415.416 203.2C418.882 201.067 420.616 198.8 420.616 196.4C420.616 194 417.549 192.8 411.416 192.8C405.549 192.8 396.216 197.067 383.416 205.6C370.616 213.867 364.216 220.667 364.216 226C364.216 230 368.882 232 378.216 232C379.816 232 382.749 231.867 387.016 231.6C391.282 231.333 393.416 231.867 393.416 233.2C393.416 234.533 386.749 239.333 373.416 247.6C360.349 255.867 353.816 262.933 353.816 268.8C353.816 275.467 358.082 278.8 366.616 278.8C375.416 278.8 385.282 276.533 396.216 272C413.816 264.267 429.816 256 444.216 247.2L451.816 242.4C452.082 242.933 452.216 244 452.216 245.6C452.216 247.2 451.016 248.533 448.616 249.6C434.482 259.2 419.016 268.4 402.216 277.2C385.416 285.733 370.216 290 356.616 290C343.282 290 336.616 285.6 336.616 276.8C336.616 267.733 348.216 255.867 371.416 241.2Z" />
						<path d="M450.831 286.4C438.831 286.4 432.831 279.867 432.831 266.8C432.831 249.467 442.165 224.667 460.831 192.4C479.765 159.867 501.231 130.8 525.231 105.2C549.498 79.3333 568.565 66.4 582.431 66.4C587.498 66.4 590.031 70 590.031 77.2C590.031 88.4 580.565 106.667 561.631 132C542.965 157.333 522.831 181.067 501.231 203.2C479.631 225.333 462.965 240.533 451.231 248.8C450.698 253.067 450.431 256 450.431 257.6C450.431 258.933 450.565 260.533 450.831 262.4C451.098 264.267 452.165 266.667 454.031 269.6C455.898 272.533 458.965 274 463.231 274C467.765 274 475.631 271.467 486.831 266.4C498.031 261.067 507.898 255.733 516.431 250.4L529.231 242.4C529.498 242.933 529.631 244 529.631 245.6C529.631 247.2 528.431 248.533 526.031 249.6C490.031 274.133 464.965 286.4 450.831 286.4ZM575.631 86.8C575.365 80.9333 573.631 78 570.431 78C562.165 78 549.631 87.3333 532.831 106C516.031 124.667 499.765 147.067 484.031 173.2C468.298 199.067 458.031 221.333 453.231 240C464.431 230.933 478.831 217.6 496.431 200C514.031 182.4 531.365 162.267 548.431 139.6C565.498 116.933 574.565 99.3333 575.631 86.8Z" />
						<path d="M570.575 268.8C583.375 263.467 597.108 256.267 611.775 247.2L619.375 242.4C619.642 242.933 619.775 244 619.775 245.6C619.775 247.2 618.575 248.533 616.175 249.6C602.042 259.2 587.908 267.6 573.775 274.8C559.642 282 546.575 285.6 534.575 285.6C519.375 285.6 511.775 280.133 511.775 269.2C511.775 256.133 520.842 241.467 538.975 225.2C557.375 208.667 575.508 200.4 593.375 200.4C600.842 200.4 604.575 203.6 604.575 210C604.575 213.733 601.242 218.4 594.575 224C585.242 231.733 579.375 235.6 576.975 235.6C574.575 235.6 573.375 234.533 573.375 232.4C573.375 231.6 573.908 230.8 574.975 230C577.642 228.4 580.575 226 583.775 222.8C587.242 219.333 588.975 216.4 588.975 214C588.975 210.267 587.242 208.4 583.775 208.4C576.308 208.4 565.375 215.2 550.975 228.8C536.575 242.133 529.375 252.933 529.375 261.2C529.375 270.533 534.442 275.2 544.575 275.2C551.242 275.2 558.575 273.6 566.575 270.4L570.575 268.8Z" />
						<path d="M695.609 252C687.343 257.067 677.743 259.6 666.809 259.6H662.009C654.809 267.867 647.076 274.667 638.809 280C630.809 285.067 623.876 287.6 618.009 287.6C609.743 287.6 605.609 282.267 605.609 271.6C605.609 260.933 611.343 248.533 622.809 234.4C621.743 231.467 621.209 227.867 621.209 223.6C621.209 214.267 625.209 206.267 633.209 199.6C641.476 192.667 649.476 189.2 657.209 189.2C673.476 189.2 681.609 198 681.609 215.6C681.609 227.333 676.543 240.133 666.409 254H671.209C679.743 254 687.076 252 693.209 248C694.009 247.2 695.076 246.8 696.409 246.8C697.743 246.8 698.409 247.333 698.409 248.4C698.409 249.2 697.476 250.4 695.609 252ZM657.209 206C658.543 205.467 659.609 205.2 660.409 205.2C661.209 205.2 661.609 205.867 661.609 207.2C661.609 208.267 660.143 209.867 657.209 212C646.543 220.267 638.543 227.733 633.209 234.4C639.076 243.733 648.009 249.867 660.009 252.8C670.409 240.533 675.609 229.067 675.609 218.4C675.609 212.267 673.609 207.6 669.609 204.4C665.609 201.2 660.409 199.6 654.009 199.6C647.876 199.6 642.143 201.467 636.809 205.2C631.476 208.667 628.809 212.533 628.809 216.8C628.809 220.8 629.209 224 630.009 226.4C638.276 217.867 647.343 211.067 657.209 206ZM627.609 243.2C623.343 250.4 621.209 258.4 621.209 267.2C621.209 272 623.343 274.4 627.609 274.4C634.809 274.4 643.743 269.067 654.409 258.4C642.409 256.267 633.476 251.2 627.609 243.2Z" />
						<path d="M703.222 246.8L693.222 253.2C692.155 253.733 691.222 254 690.422 254C689.355 254 688.822 253.467 688.822 252.4C688.822 251.333 689.222 250.4 690.022 249.6C692.155 248.533 698.822 243.733 710.022 235.2C721.488 226.4 728.822 222 732.022 222C735.488 222 737.222 224 737.222 228C737.222 231.733 733.089 239.6 724.822 251.6C716.822 263.6 712.822 270.133 712.822 271.2C712.822 272 713.089 272.4 713.622 272.4C716.022 272.4 729.889 261.867 755.222 240.8C780.555 219.733 794.289 209.2 796.422 209.2C800.422 209.2 802.422 211.067 802.422 214.8C802.422 217.2 797.755 225.467 788.422 239.6C779.355 253.467 773.355 262.933 770.422 268C770.689 268.267 771.222 268.4 772.022 268.4C773.088 268.4 778.555 264.933 788.422 258C798.289 250.8 808.555 243.2 819.222 235.2C829.889 227.2 836.155 222.667 838.022 221.6C839.889 220.267 841.622 219.6 843.222 219.6C846.422 219.867 848.022 221.733 848.022 225.2C848.022 226.533 843.355 233.6 834.022 246.4C824.955 258.933 820.422 266.933 820.422 270.4C820.422 272.8 823.222 274 828.822 274C834.689 274 843.222 271.467 854.422 266.4C865.622 261.067 875.489 255.733 884.022 250.4L896.822 242.4C897.089 242.933 897.222 244 897.222 245.6C897.222 247.2 896.022 248.533 893.622 249.6C857.622 274.133 832.555 286.4 818.422 286.4C810.155 286.4 806.022 283.2 806.022 276.8C806.022 270.667 807.755 264.8 811.222 259.2C814.955 253.6 818.155 248.933 820.822 245.2C823.489 241.2 824.822 239.067 824.822 238.8C789.089 264.933 768.422 279.2 762.822 281.6C757.489 284.267 753.622 285.6 751.222 285.6C748.822 285.6 747.622 282.933 747.622 277.6L776.422 232.8C773.222 234.133 762.822 241.467 745.222 254.8C727.622 268.133 713.888 279.2 704.022 288C700.288 292.533 696.689 294.8 693.222 294.8C689.755 294 688.022 291.733 688.022 288C688.022 286.933 692.822 279.067 702.422 264.4C712.289 249.733 717.222 241.867 717.222 240.8C717.222 239.467 716.822 238.8 716.022 238.8C715.488 238.8 714.422 239.333 712.822 240.4C711.222 241.2 709.355 242.4 707.222 244C705.089 245.6 703.755 246.533 703.222 246.8Z" />
						<path d="M908.134 241.2C892.134 241.2 884.134 237.733 884.134 230.8C884.134 222.533 893.601 212.8 912.534 201.6C931.468 190.133 948.534 184.4 963.734 184.4C971.468 184.4 975.334 186.8 975.334 191.6C975.334 194.267 973.334 197.2 969.334 200.4C965.334 203.6 961.468 206.133 957.734 208C954.001 209.867 951.868 210.8 951.334 210.8C949.734 210.8 948.668 210.133 948.134 208.8C947.601 206.933 948.934 205.067 952.134 203.2C955.601 201.067 957.334 198.8 957.334 196.4C957.334 194 954.268 192.8 948.134 192.8C942.268 192.8 932.934 197.067 920.134 205.6C907.334 213.867 900.934 220.667 900.934 226C900.934 230 905.601 232 914.934 232C916.534 232 919.468 231.867 923.734 231.6C928.001 231.333 930.134 231.867 930.134 233.2C930.134 234.533 923.468 239.333 910.134 247.6C897.068 255.867 890.534 262.933 890.534 268.8C890.534 275.467 894.801 278.8 903.334 278.8C912.134 278.8 922.001 276.533 932.934 272C950.534 264.267 966.534 256 980.934 247.2L988.534 242.4C988.801 242.933 988.934 244 988.934 245.6C988.934 247.2 987.734 248.533 985.334 249.6C971.201 259.2 955.734 268.4 938.934 277.2C922.134 285.733 906.934 290 893.334 290C880.001 290 873.334 285.6 873.334 276.8C873.334 267.733 884.934 255.867 908.134 241.2Z" />
					</mask>
					<path
						d="M170.85 8.79998C153.25 8.79998 134.85 12.6666 115.65 20.4C96.45 28.1333 79.7833 37.4667 65.65 48.4C51.25 59.0666 39.3833 70.5333 30.05 82.8C20.7167 94.8 16.05 105.2 16.05 114C16.05 130 23.3833 138 38.05 138C55.9167 138 78.45 128.667 105.65 110C132.85 91.3333 150.45 75.6 158.45 62.8C159.783 60.6667 161.117 59.6 162.45 59.6C164.05 59.6 164.85 60.6667 164.85 62.8C162.45 72.9333 153.517 85.2 138.05 99.6C122.85 113.733 105.117 126.267 84.85 137.2C64.3167 147.867 46.7167 153.2 32.05 153.2C13.1167 153.2 3.64999 143.333 3.64999 123.6C3.64999 112.933 8.45 100.667 18.05 86.8C27.65 72.9333 40.05 59.8667 55.25 47.6C70.45 35.0667 88.5833 24.5333 109.65 16C130.983 7.46665 152.05 3.19998 172.85 3.19998C213.117 3.19998 233.25 15.6 233.25 40.4C233.25 53.2 227.783 70.1333 216.85 91.2C206.183 112.267 194.317 132.133 181.25 150.8C168.45 169.467 156.583 188.533 145.65 208C134.983 227.467 129.65 242 129.65 251.6C129.65 261.2 133.783 266 142.05 266C160.183 266 180.85 258.533 204.05 243.6C206.717 226.533 215.517 206.133 230.45 182.4C245.383 158.4 260.85 138.133 276.85 121.6C293.117 104.8 305.117 96.4 312.85 96.4C320.583 96.1333 324.45 99.8667 324.45 107.6C324.45 121.467 313.25 142.533 290.85 170.8C268.717 198.8 243.783 222.8 216.05 242.8V245.6C216.05 263.733 226.05 272.8 246.05 272.8C262.583 272.8 286.317 258.133 317.25 228.8C332.183 214.667 348.45 195.467 366.05 171.2C383.917 146.667 400.717 119.467 416.45 89.6C402.05 99.2 394.05 104 392.45 104C389.517 104 388.05 102.533 388.05 99.6C388.05 96.4 388.583 94.4 389.65 93.6C390.717 92.8 393.25 91.0667 397.25 88.4C408.983 80.6667 416.717 74.5333 420.45 70L433.25 54.4C434.05 52.2666 435.25 51.2 436.85 51.2C440.317 51.7333 442.05 53.0666 442.05 55.2C442.05 56.2666 441.917 57.0666 441.65 57.6L422.05 95.6C413.517 113.2 400.05 134.8 381.65 160.4C363.25 186 346.85 206.933 332.45 223.2C318.05 239.2 302.183 253.067 284.85 264.8C267.783 276.267 252.183 282 238.05 282C214.85 282 203.25 272.267 203.25 252.8V251.6C177.383 267.6 155.383 275.6 137.25 275.6C119.117 275.6 110.05 268.4 110.05 254C110.05 242.533 115.65 226.533 126.85 206C138.317 185.467 150.85 165.867 164.45 147.2C178.05 128.267 190.45 108.4 201.65 87.6C213.117 66.8 218.85 50.5333 218.85 38.8C218.85 18.8 202.85 8.79998 170.85 8.79998ZM312.85 114.4C312.85 109.6 310.05 107.2 304.45 107.2C299.117 107.2 289.917 114.267 276.85 128.4C264.05 142.533 251.517 159.867 239.25 180.4C227.25 200.933 219.917 218.933 217.25 234.4C241.783 216 263.783 194.267 283.25 169.2C302.983 143.867 312.85 125.6 312.85 114.4Z"
						fill="#292929"
					/>
					<path
						d="M371.416 241.2C355.416 241.2 347.416 237.733 347.416 230.8C347.416 222.533 356.882 212.8 375.816 201.6C394.749 190.133 411.816 184.4 427.016 184.4C434.749 184.4 438.616 186.8 438.616 191.6C438.616 194.267 436.616 197.2 432.616 200.4C428.616 203.6 424.749 206.133 421.016 208C417.282 209.867 415.149 210.8 414.616 210.8C413.016 210.8 411.949 210.133 411.416 208.8C410.882 206.933 412.216 205.067 415.416 203.2C418.882 201.067 420.616 198.8 420.616 196.4C420.616 194 417.549 192.8 411.416 192.8C405.549 192.8 396.216 197.067 383.416 205.6C370.616 213.867 364.216 220.667 364.216 226C364.216 230 368.882 232 378.216 232C379.816 232 382.749 231.867 387.016 231.6C391.282 231.333 393.416 231.867 393.416 233.2C393.416 234.533 386.749 239.333 373.416 247.6C360.349 255.867 353.816 262.933 353.816 268.8C353.816 275.467 358.082 278.8 366.616 278.8C375.416 278.8 385.282 276.533 396.216 272C413.816 264.267 429.816 256 444.216 247.2L451.816 242.4C452.082 242.933 452.216 244 452.216 245.6C452.216 247.2 451.016 248.533 448.616 249.6C434.482 259.2 419.016 268.4 402.216 277.2C385.416 285.733 370.216 290 356.616 290C343.282 290 336.616 285.6 336.616 276.8C336.616 267.733 348.216 255.867 371.416 241.2Z"
						fill="#292929"
					/>
					<path
						d="M450.831 286.4C438.831 286.4 432.831 279.867 432.831 266.8C432.831 249.467 442.165 224.667 460.831 192.4C479.765 159.867 501.231 130.8 525.231 105.2C549.498 79.3333 568.565 66.4 582.431 66.4C587.498 66.4 590.031 70 590.031 77.2C590.031 88.4 580.565 106.667 561.631 132C542.965 157.333 522.831 181.067 501.231 203.2C479.631 225.333 462.965 240.533 451.231 248.8C450.698 253.067 450.431 256 450.431 257.6C450.431 258.933 450.565 260.533 450.831 262.4C451.098 264.267 452.165 266.667 454.031 269.6C455.898 272.533 458.965 274 463.231 274C467.765 274 475.631 271.467 486.831 266.4C498.031 261.067 507.898 255.733 516.431 250.4L529.231 242.4C529.498 242.933 529.631 244 529.631 245.6C529.631 247.2 528.431 248.533 526.031 249.6C490.031 274.133 464.965 286.4 450.831 286.4ZM575.631 86.8C575.365 80.9333 573.631 78 570.431 78C562.165 78 549.631 87.3333 532.831 106C516.031 124.667 499.765 147.067 484.031 173.2C468.298 199.067 458.031 221.333 453.231 240C464.431 230.933 478.831 217.6 496.431 200C514.031 182.4 531.365 162.267 548.431 139.6C565.498 116.933 574.565 99.3333 575.631 86.8Z"
						fill="#292929"
					/>
					<path
						d="M570.575 268.8C583.375 263.467 597.108 256.267 611.775 247.2L619.375 242.4C619.642 242.933 619.775 244 619.775 245.6C619.775 247.2 618.575 248.533 616.175 249.6C602.042 259.2 587.908 267.6 573.775 274.8C559.642 282 546.575 285.6 534.575 285.6C519.375 285.6 511.775 280.133 511.775 269.2C511.775 256.133 520.842 241.467 538.975 225.2C557.375 208.667 575.508 200.4 593.375 200.4C600.842 200.4 604.575 203.6 604.575 210C604.575 213.733 601.242 218.4 594.575 224C585.242 231.733 579.375 235.6 576.975 235.6C574.575 235.6 573.375 234.533 573.375 232.4C573.375 231.6 573.908 230.8 574.975 230C577.642 228.4 580.575 226 583.775 222.8C587.242 219.333 588.975 216.4 588.975 214C588.975 210.267 587.242 208.4 583.775 208.4C576.308 208.4 565.375 215.2 550.975 228.8C536.575 242.133 529.375 252.933 529.375 261.2C529.375 270.533 534.442 275.2 544.575 275.2C551.242 275.2 558.575 273.6 566.575 270.4L570.575 268.8Z"
						fill="#292929"
					/>
					<path
						d="M695.609 252C687.343 257.067 677.743 259.6 666.809 259.6H662.009C654.809 267.867 647.076 274.667 638.809 280C630.809 285.067 623.876 287.6 618.009 287.6C609.743 287.6 605.609 282.267 605.609 271.6C605.609 260.933 611.343 248.533 622.809 234.4C621.743 231.467 621.209 227.867 621.209 223.6C621.209 214.267 625.209 206.267 633.209 199.6C641.476 192.667 649.476 189.2 657.209 189.2C673.476 189.2 681.609 198 681.609 215.6C681.609 227.333 676.543 240.133 666.409 254H671.209C679.743 254 687.076 252 693.209 248C694.009 247.2 695.076 246.8 696.409 246.8C697.743 246.8 698.409 247.333 698.409 248.4C698.409 249.2 697.476 250.4 695.609 252ZM657.209 206C658.543 205.467 659.609 205.2 660.409 205.2C661.209 205.2 661.609 205.867 661.609 207.2C661.609 208.267 660.143 209.867 657.209 212C646.543 220.267 638.543 227.733 633.209 234.4C639.076 243.733 648.009 249.867 660.009 252.8C670.409 240.533 675.609 229.067 675.609 218.4C675.609 212.267 673.609 207.6 669.609 204.4C665.609 201.2 660.409 199.6 654.009 199.6C647.876 199.6 642.143 201.467 636.809 205.2C631.476 208.667 628.809 212.533 628.809 216.8C628.809 220.8 629.209 224 630.009 226.4C638.276 217.867 647.343 211.067 657.209 206ZM627.609 243.2C623.343 250.4 621.209 258.4 621.209 267.2C621.209 272 623.343 274.4 627.609 274.4C634.809 274.4 643.743 269.067 654.409 258.4C642.409 256.267 633.476 251.2 627.609 243.2Z"
						fill="#292929"
					/>
					<path
						d="M703.222 246.8L693.222 253.2C692.155 253.733 691.222 254 690.422 254C689.355 254 688.822 253.467 688.822 252.4C688.822 251.333 689.222 250.4 690.022 249.6C692.155 248.533 698.822 243.733 710.022 235.2C721.488 226.4 728.822 222 732.022 222C735.488 222 737.222 224 737.222 228C737.222 231.733 733.089 239.6 724.822 251.6C716.822 263.6 712.822 270.133 712.822 271.2C712.822 272 713.089 272.4 713.622 272.4C716.022 272.4 729.889 261.867 755.222 240.8C780.555 219.733 794.289 209.2 796.422 209.2C800.422 209.2 802.422 211.067 802.422 214.8C802.422 217.2 797.755 225.467 788.422 239.6C779.355 253.467 773.355 262.933 770.422 268C770.689 268.267 771.222 268.4 772.022 268.4C773.088 268.4 778.555 264.933 788.422 258C798.289 250.8 808.555 243.2 819.222 235.2C829.889 227.2 836.155 222.667 838.022 221.6C839.889 220.267 841.622 219.6 843.222 219.6C846.422 219.867 848.022 221.733 848.022 225.2C848.022 226.533 843.355 233.6 834.022 246.4C824.955 258.933 820.422 266.933 820.422 270.4C820.422 272.8 823.222 274 828.822 274C834.689 274 843.222 271.467 854.422 266.4C865.622 261.067 875.489 255.733 884.022 250.4L896.822 242.4C897.089 242.933 897.222 244 897.222 245.6C897.222 247.2 896.022 248.533 893.622 249.6C857.622 274.133 832.555 286.4 818.422 286.4C810.155 286.4 806.022 283.2 806.022 276.8C806.022 270.667 807.755 264.8 811.222 259.2C814.955 253.6 818.155 248.933 820.822 245.2C823.489 241.2 824.822 239.067 824.822 238.8C789.089 264.933 768.422 279.2 762.822 281.6C757.489 284.267 753.622 285.6 751.222 285.6C748.822 285.6 747.622 282.933 747.622 277.6L776.422 232.8C773.222 234.133 762.822 241.467 745.222 254.8C727.622 268.133 713.888 279.2 704.022 288C700.288 292.533 696.689 294.8 693.222 294.8C689.755 294 688.022 291.733 688.022 288C688.022 286.933 692.822 279.067 702.422 264.4C712.289 249.733 717.222 241.867 717.222 240.8C717.222 239.467 716.822 238.8 716.022 238.8C715.488 238.8 714.422 239.333 712.822 240.4C711.222 241.2 709.355 242.4 707.222 244C705.089 245.6 703.755 246.533 703.222 246.8Z"
						fill="#292929"
					/>
					<path
						d="M908.134 241.2C892.134 241.2 884.134 237.733 884.134 230.8C884.134 222.533 893.601 212.8 912.534 201.6C931.468 190.133 948.534 184.4 963.734 184.4C971.468 184.4 975.334 186.8 975.334 191.6C975.334 194.267 973.334 197.2 969.334 200.4C965.334 203.6 961.468 206.133 957.734 208C954.001 209.867 951.868 210.8 951.334 210.8C949.734 210.8 948.668 210.133 948.134 208.8C947.601 206.933 948.934 205.067 952.134 203.2C955.601 201.067 957.334 198.8 957.334 196.4C957.334 194 954.268 192.8 948.134 192.8C942.268 192.8 932.934 197.067 920.134 205.6C907.334 213.867 900.934 220.667 900.934 226C900.934 230 905.601 232 914.934 232C916.534 232 919.468 231.867 923.734 231.6C928.001 231.333 930.134 231.867 930.134 233.2C930.134 234.533 923.468 239.333 910.134 247.6C897.068 255.867 890.534 262.933 890.534 268.8C890.534 275.467 894.801 278.8 903.334 278.8C912.134 278.8 922.001 276.533 932.934 272C950.534 264.267 966.534 256 980.934 247.2L988.534 242.4C988.801 242.933 988.934 244 988.934 245.6C988.934 247.2 987.734 248.533 985.334 249.6C971.201 259.2 955.734 268.4 938.934 277.2C922.134 285.733 906.934 290 893.334 290C880.001 290 873.334 285.6 873.334 276.8C873.334 267.733 884.934 255.867 908.134 241.2Z"
						fill="#292929"
					/>
					<path
						d="M170.85 8.79998C153.25 8.79998 134.85 12.6666 115.65 20.4C96.45 28.1333 79.7833 37.4667 65.65 48.4C51.25 59.0666 39.3833 70.5333 30.05 82.8C20.7167 94.8 16.05 105.2 16.05 114C16.05 130 23.3833 138 38.05 138C55.9167 138 78.45 128.667 105.65 110C132.85 91.3333 150.45 75.6 158.45 62.8C159.783 60.6667 161.117 59.6 162.45 59.6C164.05 59.6 164.85 60.6667 164.85 62.8C162.45 72.9333 153.517 85.2 138.05 99.6C122.85 113.733 105.117 126.267 84.85 137.2C64.3167 147.867 46.7167 153.2 32.05 153.2C13.1167 153.2 3.64999 143.333 3.64999 123.6C3.64999 112.933 8.45 100.667 18.05 86.8C27.65 72.9333 40.05 59.8667 55.25 47.6C70.45 35.0667 88.5833 24.5333 109.65 16C130.983 7.46665 152.05 3.19998 172.85 3.19998C213.117 3.19998 233.25 15.6 233.25 40.4C233.25 53.2 227.783 70.1333 216.85 91.2C206.183 112.267 194.317 132.133 181.25 150.8C168.45 169.467 156.583 188.533 145.65 208C134.983 227.467 129.65 242 129.65 251.6C129.65 261.2 133.783 266 142.05 266C160.183 266 180.85 258.533 204.05 243.6C206.717 226.533 215.517 206.133 230.45 182.4C245.383 158.4 260.85 138.133 276.85 121.6C293.117 104.8 305.117 96.4 312.85 96.4C320.583 96.1333 324.45 99.8667 324.45 107.6C324.45 121.467 313.25 142.533 290.85 170.8C268.717 198.8 243.783 222.8 216.05 242.8V245.6C216.05 263.733 226.05 272.8 246.05 272.8C262.583 272.8 286.317 258.133 317.25 228.8C332.183 214.667 348.45 195.467 366.05 171.2C383.917 146.667 400.717 119.467 416.45 89.6C402.05 99.2 394.05 104 392.45 104C389.517 104 388.05 102.533 388.05 99.6C388.05 96.4 388.583 94.4 389.65 93.6C390.717 92.8 393.25 91.0667 397.25 88.4C408.983 80.6667 416.717 74.5333 420.45 70L433.25 54.4C434.05 52.2666 435.25 51.2 436.85 51.2C440.317 51.7333 442.05 53.0666 442.05 55.2C442.05 56.2666 441.917 57.0666 441.65 57.6L422.05 95.6C413.517 113.2 400.05 134.8 381.65 160.4C363.25 186 346.85 206.933 332.45 223.2C318.05 239.2 302.183 253.067 284.85 264.8C267.783 276.267 252.183 282 238.05 282C214.85 282 203.25 272.267 203.25 252.8V251.6C177.383 267.6 155.383 275.6 137.25 275.6C119.117 275.6 110.05 268.4 110.05 254C110.05 242.533 115.65 226.533 126.85 206C138.317 185.467 150.85 165.867 164.45 147.2C178.05 128.267 190.45 108.4 201.65 87.6C213.117 66.8 218.85 50.5333 218.85 38.8C218.85 18.8 202.85 8.79998 170.85 8.79998ZM312.85 114.4C312.85 109.6 310.05 107.2 304.45 107.2C299.117 107.2 289.917 114.267 276.85 128.4C264.05 142.533 251.517 159.867 239.25 180.4C227.25 200.933 219.917 218.933 217.25 234.4C241.783 216 263.783 194.267 283.25 169.2C302.983 143.867 312.85 125.6 312.85 114.4Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M371.416 241.2C355.416 241.2 347.416 237.733 347.416 230.8C347.416 222.533 356.882 212.8 375.816 201.6C394.749 190.133 411.816 184.4 427.016 184.4C434.749 184.4 438.616 186.8 438.616 191.6C438.616 194.267 436.616 197.2 432.616 200.4C428.616 203.6 424.749 206.133 421.016 208C417.282 209.867 415.149 210.8 414.616 210.8C413.016 210.8 411.949 210.133 411.416 208.8C410.882 206.933 412.216 205.067 415.416 203.2C418.882 201.067 420.616 198.8 420.616 196.4C420.616 194 417.549 192.8 411.416 192.8C405.549 192.8 396.216 197.067 383.416 205.6C370.616 213.867 364.216 220.667 364.216 226C364.216 230 368.882 232 378.216 232C379.816 232 382.749 231.867 387.016 231.6C391.282 231.333 393.416 231.867 393.416 233.2C393.416 234.533 386.749 239.333 373.416 247.6C360.349 255.867 353.816 262.933 353.816 268.8C353.816 275.467 358.082 278.8 366.616 278.8C375.416 278.8 385.282 276.533 396.216 272C413.816 264.267 429.816 256 444.216 247.2L451.816 242.4C452.082 242.933 452.216 244 452.216 245.6C452.216 247.2 451.016 248.533 448.616 249.6C434.482 259.2 419.016 268.4 402.216 277.2C385.416 285.733 370.216 290 356.616 290C343.282 290 336.616 285.6 336.616 276.8C336.616 267.733 348.216 255.867 371.416 241.2Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M450.831 286.4C438.831 286.4 432.831 279.867 432.831 266.8C432.831 249.467 442.165 224.667 460.831 192.4C479.765 159.867 501.231 130.8 525.231 105.2C549.498 79.3333 568.565 66.4 582.431 66.4C587.498 66.4 590.031 70 590.031 77.2C590.031 88.4 580.565 106.667 561.631 132C542.965 157.333 522.831 181.067 501.231 203.2C479.631 225.333 462.965 240.533 451.231 248.8C450.698 253.067 450.431 256 450.431 257.6C450.431 258.933 450.565 260.533 450.831 262.4C451.098 264.267 452.165 266.667 454.031 269.6C455.898 272.533 458.965 274 463.231 274C467.765 274 475.631 271.467 486.831 266.4C498.031 261.067 507.898 255.733 516.431 250.4L529.231 242.4C529.498 242.933 529.631 244 529.631 245.6C529.631 247.2 528.431 248.533 526.031 249.6C490.031 274.133 464.965 286.4 450.831 286.4ZM575.631 86.8C575.365 80.9333 573.631 78 570.431 78C562.165 78 549.631 87.3333 532.831 106C516.031 124.667 499.765 147.067 484.031 173.2C468.298 199.067 458.031 221.333 453.231 240C464.431 230.933 478.831 217.6 496.431 200C514.031 182.4 531.365 162.267 548.431 139.6C565.498 116.933 574.565 99.3333 575.631 86.8Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M570.575 268.8C583.375 263.467 597.108 256.267 611.775 247.2L619.375 242.4C619.642 242.933 619.775 244 619.775 245.6C619.775 247.2 618.575 248.533 616.175 249.6C602.042 259.2 587.908 267.6 573.775 274.8C559.642 282 546.575 285.6 534.575 285.6C519.375 285.6 511.775 280.133 511.775 269.2C511.775 256.133 520.842 241.467 538.975 225.2C557.375 208.667 575.508 200.4 593.375 200.4C600.842 200.4 604.575 203.6 604.575 210C604.575 213.733 601.242 218.4 594.575 224C585.242 231.733 579.375 235.6 576.975 235.6C574.575 235.6 573.375 234.533 573.375 232.4C573.375 231.6 573.908 230.8 574.975 230C577.642 228.4 580.575 226 583.775 222.8C587.242 219.333 588.975 216.4 588.975 214C588.975 210.267 587.242 208.4 583.775 208.4C576.308 208.4 565.375 215.2 550.975 228.8C536.575 242.133 529.375 252.933 529.375 261.2C529.375 270.533 534.442 275.2 544.575 275.2C551.242 275.2 558.575 273.6 566.575 270.4L570.575 268.8Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M695.609 252C687.343 257.067 677.743 259.6 666.809 259.6H662.009C654.809 267.867 647.076 274.667 638.809 280C630.809 285.067 623.876 287.6 618.009 287.6C609.743 287.6 605.609 282.267 605.609 271.6C605.609 260.933 611.343 248.533 622.809 234.4C621.743 231.467 621.209 227.867 621.209 223.6C621.209 214.267 625.209 206.267 633.209 199.6C641.476 192.667 649.476 189.2 657.209 189.2C673.476 189.2 681.609 198 681.609 215.6C681.609 227.333 676.543 240.133 666.409 254H671.209C679.743 254 687.076 252 693.209 248C694.009 247.2 695.076 246.8 696.409 246.8C697.743 246.8 698.409 247.333 698.409 248.4C698.409 249.2 697.476 250.4 695.609 252ZM657.209 206C658.543 205.467 659.609 205.2 660.409 205.2C661.209 205.2 661.609 205.867 661.609 207.2C661.609 208.267 660.143 209.867 657.209 212C646.543 220.267 638.543 227.733 633.209 234.4C639.076 243.733 648.009 249.867 660.009 252.8C670.409 240.533 675.609 229.067 675.609 218.4C675.609 212.267 673.609 207.6 669.609 204.4C665.609 201.2 660.409 199.6 654.009 199.6C647.876 199.6 642.143 201.467 636.809 205.2C631.476 208.667 628.809 212.533 628.809 216.8C628.809 220.8 629.209 224 630.009 226.4C638.276 217.867 647.343 211.067 657.209 206ZM627.609 243.2C623.343 250.4 621.209 258.4 621.209 267.2C621.209 272 623.343 274.4 627.609 274.4C634.809 274.4 643.743 269.067 654.409 258.4C642.409 256.267 633.476 251.2 627.609 243.2Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M703.222 246.8L693.222 253.2C692.155 253.733 691.222 254 690.422 254C689.355 254 688.822 253.467 688.822 252.4C688.822 251.333 689.222 250.4 690.022 249.6C692.155 248.533 698.822 243.733 710.022 235.2C721.488 226.4 728.822 222 732.022 222C735.488 222 737.222 224 737.222 228C737.222 231.733 733.089 239.6 724.822 251.6C716.822 263.6 712.822 270.133 712.822 271.2C712.822 272 713.089 272.4 713.622 272.4C716.022 272.4 729.889 261.867 755.222 240.8C780.555 219.733 794.289 209.2 796.422 209.2C800.422 209.2 802.422 211.067 802.422 214.8C802.422 217.2 797.755 225.467 788.422 239.6C779.355 253.467 773.355 262.933 770.422 268C770.689 268.267 771.222 268.4 772.022 268.4C773.088 268.4 778.555 264.933 788.422 258C798.289 250.8 808.555 243.2 819.222 235.2C829.889 227.2 836.155 222.667 838.022 221.6C839.889 220.267 841.622 219.6 843.222 219.6C846.422 219.867 848.022 221.733 848.022 225.2C848.022 226.533 843.355 233.6 834.022 246.4C824.955 258.933 820.422 266.933 820.422 270.4C820.422 272.8 823.222 274 828.822 274C834.689 274 843.222 271.467 854.422 266.4C865.622 261.067 875.489 255.733 884.022 250.4L896.822 242.4C897.089 242.933 897.222 244 897.222 245.6C897.222 247.2 896.022 248.533 893.622 249.6C857.622 274.133 832.555 286.4 818.422 286.4C810.155 286.4 806.022 283.2 806.022 276.8C806.022 270.667 807.755 264.8 811.222 259.2C814.955 253.6 818.155 248.933 820.822 245.2C823.489 241.2 824.822 239.067 824.822 238.8C789.089 264.933 768.422 279.2 762.822 281.6C757.489 284.267 753.622 285.6 751.222 285.6C748.822 285.6 747.622 282.933 747.622 277.6L776.422 232.8C773.222 234.133 762.822 241.467 745.222 254.8C727.622 268.133 713.888 279.2 704.022 288C700.288 292.533 696.689 294.8 693.222 294.8C689.755 294 688.022 291.733 688.022 288C688.022 286.933 692.822 279.067 702.422 264.4C712.289 249.733 717.222 241.867 717.222 240.8C717.222 239.467 716.822 238.8 716.022 238.8C715.488 238.8 714.422 239.333 712.822 240.4C711.222 241.2 709.355 242.4 707.222 244C705.089 245.6 703.755 246.533 703.222 246.8Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
					<path
						d="M908.134 241.2C892.134 241.2 884.134 237.733 884.134 230.8C884.134 222.533 893.601 212.8 912.534 201.6C931.468 190.133 948.534 184.4 963.734 184.4C971.468 184.4 975.334 186.8 975.334 191.6C975.334 194.267 973.334 197.2 969.334 200.4C965.334 203.6 961.468 206.133 957.734 208C954.001 209.867 951.868 210.8 951.334 210.8C949.734 210.8 948.668 210.133 948.134 208.8C947.601 206.933 948.934 205.067 952.134 203.2C955.601 201.067 957.334 198.8 957.334 196.4C957.334 194 954.268 192.8 948.134 192.8C942.268 192.8 932.934 197.067 920.134 205.6C907.334 213.867 900.934 220.667 900.934 226C900.934 230 905.601 232 914.934 232C916.534 232 919.468 231.867 923.734 231.6C928.001 231.333 930.134 231.867 930.134 233.2C930.134 234.533 923.468 239.333 910.134 247.6C897.068 255.867 890.534 262.933 890.534 268.8C890.534 275.467 894.801 278.8 903.334 278.8C912.134 278.8 922.001 276.533 932.934 272C950.534 264.267 966.534 256 980.934 247.2L988.534 242.4C988.801 242.933 988.934 244 988.934 245.6C988.934 247.2 987.734 248.533 985.334 249.6C971.201 259.2 955.734 268.4 938.934 277.2C922.134 285.733 906.934 290 893.334 290C880.001 290 873.334 285.6 873.334 276.8C873.334 267.733 884.934 255.867 908.134 241.2Z"
						stroke="#379683"
						strokeWidth="6"
						mask="url(#path-1-outside-1_1_10)"
					/>
				</svg>
			</div>
			<CreateNav />
		</section>
	);
}
