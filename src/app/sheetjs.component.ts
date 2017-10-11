/* xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
import { Component } from '@angular/core';

import * as XLSX from 'xlsx';

import { saveAs } from 'file-saver';

import { } from "module";
type AOA = Array<Array<any>>;

function s2ab(s: string): ArrayBuffer {
	const buf: ArrayBuffer = new ArrayBuffer(s.length);
	const view: Uint8Array = new Uint8Array(buf);
	for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}

@Component({
	selector: 'sheetjs',
	styleUrls: ['./sheetjs.css'],
	templateUrl: './sheetjs.html',
})
/* <table class="sjs-table">
<tr *ngFor="let row of data">
	<td *ngFor="let val of row">
		{{val}}
	</td>
</tr>
</table> */
export class SheetJSComponent {
	data: AOA;
	wopts: XLSX.WritingOptions;
	fileName: string;
	currentImage: string = '';
	currentLandfill: string;
	images = {
		'anoka': "./../assets/img/dots/Anoka_Gas_Well_Map.png",
		'eastBethel': "./../assets/img/dots/East_Bethel_Gas_Well_Map.png",
		'wde': "./../assets/img/dots/WDE_Gas_Well_Map.png",
	}
	translateData = {
		"anoka": {
			"GW-43": "translate(612px, 513px)",
			"GW-42": "translate(717px, 518px)",
			"GW-41": "translate(717px, 611px)",
			"GW-40": "translate(760px, 745px)",
			"GW-39": "translate(672px, 756px)",
			"GW-38": "translate(610px, 646px)",
			"GW-37": "translate(586px, 749px)",
			"GW-36": "translate(467px, 645px)",
			"GW-35": "translate(494px, 750px)",
			"GW-34": "translate(465px, 541px)",
			"GW-33": "translate(381px, 501px)",
			"GW-32": "translate(575px, 328px)",
			"GW-31": "translate(472px, 294px)",
			"GW-30": "translate(378px, 375px)",
			"GW-29": "translate(486px, 429px)",
			"GW-28": "translate(192px, 429px)",
			"GW-27": "translate(300px, 472px)",
			"GW-26": "translate(311px, 295px)",
			"GW-25": "translate(204px, 319px)",
			"GW-24": "translate(93px, 284px)",
			"GW-23": "translate(109px, 390px)",
			"GW-22": "translate(195px, 192px)",
			"GW-21": "translate(88px, 170px)",
			"GW-20": "translate(80px, 68px)",
			"GW-19": "translate(189px, 70px)",
			"GW-18": "translate(343px, 161px)",
			"GW-17": "translate(291px, 79px)",
			"GW-16": "translate(384px, 75px)",
			"GW-15": "translate(486px, 181px)",
			"GW-14": "translate(573px, 207px)",
			"GW-13": "translate(597px, 89px)",
			"GW-12": "translate(489px, 95px)",
			"GW-11": "translate(682px, 75px)",
			"GW-10": "translate(753px, 72px)",
			"GW-9": "translate(836px, 89px)",
			"GW-8": "translate(679px, 244px)",
			"GW-7": "translate(724px, 321px)",
			"GW-6": "translate(756px, 166px)",
			"GW-5": "translate(858px, 176px)",
			"GW-4": "translate(854px, 268px)",
			"GW-3": "translate(814px, 361px)",
			"GW-2": "translate(693px, 402px)",
			"GW-1": "translate(784px, 446px)",
		},
		'eastBethel': {
			"GW-34": "translate(182px, 691px)",
			"GW-33": "translate(245px, 761px)",
			"GW-32": "translate(384px, 718px)",
			"GW-31": "translate(263px, 630px)",
			"GW-30": "translate(332px, 603px)",
			"GW-29": "translate(525px, 589px)",
			"GW-28": "translate(578px, 509px)",
			"GW-27": "translate(407px, 522px)",
			"GW-26": "translate(515px, 387px)",
			"GW-25": "translate(626px, 401px)",
			"GW-24": "translate(702px, 303px)",
			"GW-23": "translate(613px, 294px)",
			"GW-22": "translate(711px, 208px)",
			"GW-21": "translate(825px, 313px)",
			"GW-20": "translate(831px, 206px)",
			"GW-19": "translate(712px, 123px)",
			"GW-18": "translate(643px, 5px)",
			"GW-17": "translate(602px, 164px)",
			"GW-16": "translate(546px, 6px)",
			"GW-15": "translate(506px, 80px)",
			"GW-14": "translate(465px, 0px)",
			"GW-13": "translate(465px, 201px)",
			"GW-12": "translate(382px, 173px)",
			"GW-11": "translate(306px, 158px)",
			"GW-10": "translate(180px, 173px)",
			"GW-9": "translate(177px, 253px)",
			"GW-8": "translate(349px, 257px)",
			"GW-7": "translate(252px, 298px)",
			"GW-6": "translate(405px, 378px)",
			"GW-5": "translate(315px, 406px)",
			"GW-4": "translate(148px, 362px)",
			"GW-3": "translate(222px, 479px)",
			"GW-2": "translate(131px, 465px)",
			"GW-1": "translate(111px, 562px)",
			"HEW-8": "translate(105px, 796px)",
			"HEW-7": "translate(39px, 679px)",
			"HEW-6": "translate(206px, 107px)",
			"HEW-5": "translate(328px, 27px)",
			"HEW-4": "translate(785px, 53px)",
			"HEW-3": "translate(758px, 399px)",
			"HEW-2": "translate(665px, 491px)",
			"HEW-1": "translate(453px, 673px)"
		},
		'wde': {
			"GW-34": "translate(477px, 720px)",
			"GW-33": "translate(369px, 745px)",
			"GW-32": "translate(284px, 731px)",
			"GW-31": "translate(298px, 636px)",
			"GW-30": "translate(213px, 546px)",
			"GW-29": "translate(215px, 469px)",
			"GW-28": "translate(220px, 402px)",
			"GW-27": "translate(239px, 294px)",
			"GW-26": "translate(300px, 112px)",
			"GW-25": "translate(348px, 42px)",
			"GW-24": "translate(430px, 94px)",
			"GW-23": "translate(558px, 117px)",
			"GW-22": "translate(585px, 205px)",
			"GW-21": "translate(594px, 292px)",
			"GW-20": "translate(700px, 320px)",
			"GW-19": "translate(641px, 411px)",
			"GW-18": "translate(711px, 444px)",
			"GW-17": "translate(813px, 558px)",
			"GW-16": "translate(848px, 688px)",
			"GW-15": "translate(937px, 649px)",
			"GW-14": "translate(1020px, 715px)",
			"GW-13": "translate(1127px, 834px)",
			"GW-12": "translate(1036px, 854px)",
			"GW-11": "translate(914px, 821px)",
			"GW-10": "translate(778px, 801px)",
			"GW-9": "translate(666px, 740px)",
			"GW-8": "translate(580px, 744px)",
			"GW-7": "translate(532px, 810px)",
			"GW-6": "translate(383px, 829px)",
			"GW-5": "translate(182px, 772px)",
			"GW-4": "translate(205px, 677px)",
			"GW-3": "translate(116px, 581px)",
			"GW-2": "translate(91px, 494px)",
			"GW-1": "translate(94px, 405px)",
			"GW-54": "translate(1118px, 638px)",
			"GW-53": "translate(143px, 288px)",
			"GW-52": "translate(181px, 210px)",
			"GW-51": "translate(222px, 129px)",
			"GW-50": "translate(371px, 357px)",
			"GW-49": "translate(381px, 526px)",
			"GW-48": "translate(478px, 558px)",
			"GW-47": "translate(374px, 604px)",
			"GW-46": "translate(422px, 421px)",
			"GW-45": "translate(302px, 539px)",
			"GW-44": "translate(339px, 448px)",
			"GW-43": "translate(327px, 315px)",
			"GW-42": "translate(410px, 267px)",
			"GW-41": "translate(371px, 185px)",
			"GW-40": "translate(488px, 218px)",
			"GW-39": "translate(493px, 321px)",
			"GW-38": "translate(545px, 436px)",
			"GW-37": "translate(553px, 572px)",
			"GW-36": "translate(658px, 617px)",
			"GW-35": "translate(725px, 645px)"
		},
	}
	constructor() {

	}
	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

			/* grab first sheet */
			const wsname: string = "Gas Wells";
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
			console.log(this.data);
			if (this.data[1][0] === "Anoka/Ramsey Landfill") {
				this.currentImage = this.images.anoka;
				this.currentLandfill = 'anoka';
			}
			if (this.data[1][0] === "East Bethel Sanitary Landfill") {
				this.currentImage = this.images.eastBethel;
				this.currentLandfill = 'eastBethel';
			}
			if (this.data[1][0] === "Waste Disposal Engineering Landfill") {
				this.currentImage = this.images.wde;
				this.currentLandfill = 'wde';
				this.data.forEach(x => {
					if (x[0] === "GW-43") {
						x[1] = false;
						x[2] = false;
						x[3] = false;
						x[4] = false;
						x[5] = false;
						x[6] = false;
						x[99] = "Abandoned";
					}
				});
			}
		};
		reader.readAsBinaryString(target.files[0]);
	}

	export(): void {
		/* generate worksheet */
		const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

		/* generate workbook and add the worksheet */
		const wb: XLSX.WorkBook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

		/* save to file */
		const wbout: string = XLSX.write(wb, this.wopts);
		saveAs(new Blob([s2ab(wbout)]), this.fileName);
	}
	onDragEnd(event, gw) {
		//console.log(event, gw);
		//console.log(event.style, event.style.transform, gw);

		if (gw[0])
			this.translateData[this.currentLandfill][gw[0]] = event.style.transform;
		console.log(this.translateData)
	}
	getTransform(gw) {
		//console.log('returning: ', gw, this.translateData[this.currentLandfill][gw])
		if (gw)
			return this.translateData[this.currentLandfill][gw];
	}
	isData(gw) {
		if ((gw && gw.substring(0, 2) === "GW") || (gw && gw.substring(0, 3) === "HEW"))
			return true;
		else
			return false;
	}
}
