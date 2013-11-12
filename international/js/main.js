$(document).ready(function() {


	var view = {
		icon: function() { 
			var icons = ""
			for (var i = 0; i < this.graphic.length; i++) {
				icons += "<i class='icon-"+this.graphic[i]+"'></i>"; 
			}
			return icons;
		},
		countries: [
			{
				name: "China",
				number: "1",
				steps: [
					{
						country: "china",
						number: "1",
						title: "Application Fee",
						graphic: [],
						text: "$160",
						content: "Pay a non-refundable F-1 visa application fee at the designated branches of China CITIC bank. Keep the fee receipt and include it in the application. Cost: $160 U.S. or 1024 Chinese yuan."
					},
					{
						country: "china",
						number: "2",
						title: "DS-160 Form",
						graphic: ["edit"],
						content: "Fill out a DS-160 form, the online nonimmigrant visa application through the U.S. Department of State website. Print and keep the barcode page to have on hand at the interview."
					},
					{
						country: "china",
						number: "3",
						title: "SEVIS Form",
						graphic: ["edit"],
						text: "$200",
						content: "Complete the Student and Exchange Visitor Information (SEVIS) form, pay the fee, and keep the receipt. The fee can be paid online, through the mail, by a third party such as a school sponsor, or by sponsors of an exchange program. Cost: $200 U.S. or 1262 Chinese yuan."
					},
					{
						country: "china",
						number: "4",
						title: "Call",
						graphic: ["phone", "file"],
						content: "Make a phone call to the Visa Information Center to set up an interview appointment. Have the following information at hand: full name, passport number, Chinese ID card number, DS-160 ID number, visa application fee receipt number, contact information, purpose of travel, place of residence, whether s/he was refused before, etc."
					},
					{
						country: "china",
						number: "5",
						title: "Appointment",
						graphic: ["calendar", "plane", "time"],
						content: "Plan to appear at the U.S. Embassy for the interview a full two months before your arrival in Los Angeles to allow for processing time. "
					},

					{
						country: "china",
						number: "6",
						title: "Wait",
						graphic: ["time"],
						text: "2 days",
						content: "The wait time for an appointment is about 2 days."
					},
					{
						country: "china",
						number: "7",
						title: "Interview",
						graphic: ["group", "file", "file"],
						content: "Arriving at the interview, be prepared to present the following documents: <ul>	<li>A passport valid for at least six months beyond your stay in the U.S. </li> 	<li>The DS-160 application form confirmation page, with email address, name, telecodes for name, home address, company name and company address handwritten in Hanzi (Chinese characters) on the form</li>	<li>A two-inch square color photograph</li>	<li>The receipt from CITIC Bank for the application fee</li>	<li>Passports containing all previous U.S. visas</li>	<li>A completed SEVIS I-20A-B form, signed by the Designated School Official (DSO) and the applicant</li>	<li>A SEVIS fee receipt</li>	<li>Proof of ties to China</li>	<li>Proof that you can support yourself financially </li>	<li>A detailed research and study plan</li>	<li>A resume or curriculum vitae</li></ul>"
					},
				]
			},

			{
				name:"India",
				number: "2",
				steps: [
					{
						country: "india",
						number: "1",
						title: "Application Fee",
						graphic: [],
						text: "$160",
						content: "Pay the nonrefundable visa application fee ($160 U.S. or 9,280 Indian Rupees, according to the current consular exchange rate) and the Visa Facilitation Service  (VFS) Global charge (386 Indian Rupees) at a designated branch of the HDFC Bank. You need to wait one business day for processing. Total cost: 9,666 Indian Rupees"
					},
					{
						country: "india",
						number: "2",
						title: "DS-160 Form",
						graphic: ["edit"],
						content: "Complete the DS-160 form and print a confirmation copy containing the Consular Electronic Application Center (CEAC) barcode number."
					},
					{
						country: "india",
						number: "3",
						title: "SEVIS Form",
						graphic: ["edit"],
						text: "$200",
						content: "Complete the Student and Exchange Visitor Information (SEVIS) form, pay the fee, and keep the receipt. The fee can be paid online, through the mail, by a third party such as a school sponsor, or by sponsors of an exchange program. Cost: $200 U.S. or 10,804 Indian Rupees"
					},
					{
						country: "india",
						number: "4",
						title: "Documents",
						graphic: ["edit", "envelope","road"],
						content: "Create a profile on the U.S. VIsa Information Service for India website and arrange for the delivery of the passport and visa. There are 33 document pick-up locations located across India."
					},
					{
						country: "india",
						number: "5",
						title: "Appointment",
						graphic: ["calendar", "time"],
						text: ["7 days"],
						content: "Make an interview appointment through the VFS Global website for the U.S. Embassy in Delhi or the U.S. Consulates General in Kolkata, Chennai, Mumbai and Hyderabad, and keep the appointment letter. It'll take about a week before you can get in."
					},
					{
						country: "india",
						number: "6",
						title: "Interview",
						graphic: ["group", "file", "file"],
						content: "Don't arrive for the interview more than 15 minutes before the set time. Bring to the interview:<ul><li>A valid passport and previously issued passports</li><li>A recent passport-size photograph</li><li>The DS-160 page with a barcode</li><li>The HDFC visa application fee receipt</li><li>The VFS appointment letter </li><li>A completed SEVIS 1-120 form and a receipt</li></ul>"
					}
				]
			},

			{
				name:"Canada",
				number: "3",
				steps: [
					{
						country: "canada",
						number: "1",
						title: "Passport",
						graphic: ["file"],
						content: "Canadian students do not need a visa to enter the U.S. directly from Canada to study at UCLA. Canadian students do need a passport, however."
					},
					{
						country: "canada",
						number: "2",
						title: "SEVIS Form",
						graphic: ["edit"],
						content: "Complete the Student and Exchange Visitor Information (SEVIS) 1-20 form, pay the fee, and keep the receipt. The fee can be paid online, through the mail, by a third party such as a school sponsor, or by sponsors of an exchange program. You'll receive a registration number as well. Cost: $200 U.S. or 195 Canadian dollars."
					},
					{
						country: "canada",
						number: "4",
						title: "Documents",
						graphic: ["file", "road"],
						content: "When you cross the border, no more than 30 days before the start of UCLA's fall quarter, you need to provide the following:<ul><li>Proof of identity and citizenship, such as a Canadian passport</li><li>The I-20 SEVIS. certificate</li><li>A SEVIS receipt</li><li>Proof that you can pay to attend UCLA</li><li>Proof of ties to Canada</li></ul>"
					}
				]
			},

			{
				name:"Malaysia",
				number: "4",
				steps: [
					{
						country: "malaysia",
						number: "1",
						title: "Application Fee",
						graphic: [],
						text: "$160",
						content: "Pay a non-refundable application fee at  any Standard Chartered Bank in Malaysia. Before going to the bank, print the application deposit slip and take it with you, noting the expiration date. Keep the fee receipt and include it in the application. Cost: $160 U.S. or 512 Malaysian ringgit"
					},
					{
						country: "malaysia",
						number: "2",
						title: "DS-160 Form",
						graphic: ["edit"],
						content: "Fill out a DS-160 form, the online visa application through the U.S. Department of State website. Print and keep the barcode page to have on hand at the interview."
					},
					{
						country: "malaysia",
						number: "3",
						title: "SEVIS Form",
						graphic: ["edit"],
						text: "$200",
						content: "Complete the Student and Exchange Visitor Information (SEVIS) form, pay the fee, and keep the receipt. The fee can be paid online, through the mail, by a third party such as a school sponsor, or by sponsors of an exchange program. Cost: $200 U.S. or 612 Malaysian ringgit"
					},
					{
						country: "malaysia",
						number: "4",
						title: "Appointment",
						graphic: ["phone", "calendar"],
						content: "Within a few hours of paying the visa application fee at the bank, you can schedule your appointment online or by contacting the visa call center. If you pay your visa fee online, you must wait until after 3 p.m. on the banking day after the date of payment. There is a wait time of about one day. "
					},
					{
						country: "malaysia",
						number: "5",
						title: "Interview",
						graphic: ["group", "file","file"],
						content: "Bring to the interview:<ul><li>The completed DS-160 application form</li><li>A passport valid for at least six months beyond your stay in the U.S. </li><li>A 2\"x2\" photograph</li><li>A visa application receipt </li><li>An approved SEVIS. I-20 form from UCLA</li><li>An SEVIS. receipt</li><li>An appointment letter showing you booked the interview through the call center</li><li>Supporting documents, with financial or scholastic information </li></ul>"
					}
				]
			},
			{
				name:"South Korea",
				number: "5",
				steps: [
					{
						country: "south-korea",
						number: "1",
						title: "Apply Early",
						graphic: ["time"],
						text: "3 months",
						contentt: "Pay a non-refundable application fee at  any Standard Chartered Bank in South Korea. Before going to the bank, print the application deposit slip and take it with you, noting the expiration date. Keep the fee receipt and include it in the application. Cost: $160 U.S. or 179,024 South Korean won"
					},
					{
						country: "south-korea",
						number: "2",
						title: "Application Fee",
						graphic: [],
						text: "$160",
						content: "Pay a non-refundable application fee at  any Citibank branch in South Korea at the exchange rate on the day of the interview. Before going to the bank, print the application deposit slip and take it with you, noting the expiration date. Keep the fee receipt and include it in the application. Cost: $160 U.S. or 179,024 South Korean won "
					},
					{
						country: "south-korea",
						number: "2",
						title: "DS-160 Form",
						graphic: ["edit"],
						content: "Fill out a DS-160 form, the online visa application through the U.S. Department of State website. Print and keep the barcode page to have on hand at the interview."
					},
					{
						country: "south-korea",
						number: "3",
						title: "SEVIS Form",
						graphic: ["edit"],
						text: "$200",
						content: "Complete the Student and Exchange Visitor Information (SEVIS) form, pay the fee, and keep the receipt. The fee can be paid online, through the mail, by a third party such as a school sponsor, or by sponsors of an exchange program. Cost: $200 U.S. or  223,228 Korean won"
					},
					{
						country: "south-korea",
						number: "4",
						title: "Appointment",
						graphic: ["phone", "calendar"],
						content: "Schedule your appointment at the U.S. Embassy in Seoul through the visa information call center. To schedule the interview, have on hand: <ul><li>A passport valid for at least six months beyond your stay in the U.S., though South Korea provides a exemption to the requirement</li><li>The \"Transaction Reference Number\" appearing on your Citibank receipt</li><li>The barcode from your DS-160 confirmation page</li><li>Your email address</li></ul>The wait time for an interview is about one day."
					},
					{
						country: "south-korea",
						number: "5",
						title: "Interview",
						graphic: ["group", "file","file"],
						content: "On your interview date, you cannot enter the embassy more than 5 minutes ahead of your interview time. Bring to the interview: <ul><li>A copy of your appointment letter</li><li>A DS-160 confirmation page</li><li>A valid passport and previously issued passports</li><li>A recent passport-size photograph</li></ul>"
					}
				]
			}
		]
		
	};

	var template = $(".tab-content").html();
	var output = Mustache.render(template,view);
	$(".tab-content").html(output);
	$(".tab-pane").first().addClass("active");
	$(".tab-content").animate({
		opacity: 1
	});

	$(".tab-pane").each(function() {
		$(this).find(".flow-arrow").last().remove();
	});



	/*$(".accordion-toggle").click(function() {
		var group = $(this).parent().parent();
		if ($(this).data('expanded')) {
			//group.animate({'width':$(this).data('width')}, 0);
			group.css('width',$(this).data('width'));
			$(this).data('expanded',false);
		}
		else {
			$(this).data('width',group.width());
			$(this).data('expanded',true);
			//group.animate({'width':'100%'},0);
			group.css('width','100%');
		}
	});*/

});
