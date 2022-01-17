import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import terms_conditions_1 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TermsAndConditionApp = () => {
  const { userData } = useSelector((state) => state.directory);
  return (
    <div>
      {/* <Header /> */}

      {/* <!-- My Leads --> */}
      <section className="section-top">
        <h2 className="section-top__title">
          Terms and <span>Conditions</span>
        </h2>
      </section>
      <section className="section section--page page">
        {/* <!--<p>
				<span
					>&nbsp;The following provisions govern your use of Tap A Tradie and/or Tradie Apps and all other services made
					available to you through the Tap A Tradie and/or Tradie Apps including the tapatradie.com&nbsp;web site.
					PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE Tap A Tradie and/or Tradie Apps. By using
					the Tap A Tradie and/or Tradie Apps, you agree to be bound by these Terms and Conditions which constitute a
					contract between you and Tap A Tradie Worldwide Pty Limited (ABN 53 169 932 474) of 203 Underwood Avenue,
					Floreat, WA, Australia ("we" or "us"). If you do not agree to all of the provisions contained in these Terms
					and Conditions, DO NOT use the Tap A Tradie and/or Tradie Apps. We reserve the right to revise and update
					these Terms and Conditions at any time. Please periodically review these Terms and Conditions. Your continued
					use of the Tap A Tradie and/or Tradie Apps constitutes your acceptance of and agreement to any revised Terms
					and Conditions.</span
				>
			</p>
			<p>
				The Company provides the Tap A Tradie Worldwide digital platform to book tradespersons. Use of Tap A Tradie
				Worldwide is subject to these Terms of Service. <br />
			</p>

			<p><b>Definitions</b></p>
			<p>The following terms are used regularly throughout these Terms of Service and have a particular meaning:</p>
			<ul>
				<li><b>ABN</b>&nbsp;means Australian Business Number.</li>

				<li><b>ACN</b>&nbsp;means Australian Company Number.</li>

				<li>
					<b>Agreement</b>&nbsp;means the agreement formed between the Users and the Company under, and on the terms of,
					this Terms of Service.&nbsp;
				</li>

				<li>
					<b>Business Day&nbsp;</b>means a day (other than a Saturday, Sunday or public holiday) on which banks are open
					for general banking business in Sydney, Australia.
				</li>

				<li><b>Cancellation Fee</b>&nbsp;means a Fee charged to a Customer for cancelling a Job Request.</li>

				<li><b>Company</b>&nbsp;means Tap A Tradie Worldwide ABN 53 169 932 474.</li>

				<li><b>Corporations Act&nbsp;</b>means the&nbsp;<i>Corporations Act&nbsp;</i>2001 (Cth).</li>

				<li><b>Customer</b>&nbsp;means a registered user of Tap A Tradie Worldwide that books a Job.</li>

				<li>
					<b>Deposit&nbsp;</b>means a Fee charged to the Customer as a deposit against a Job Request, once the
					Tradesperson has confirmed the Job.
				</li>

				<li><b>Equipment &amp; Materials</b>&nbsp;means any equipment and materials necessary for a Job.</li>

				<li>
					<b>GST&nbsp;</b>has the meaning given by the&nbsp;<i
						>A New Tax System (Goods and Services Tax) Act 1999&nbsp;</i
					>(Cth).
				</li>

				<li>
					<b>Intellectual Property</b>&nbsp;means all copyright, patents, inventions, trade secrets, know-how, product
					formulations, designs, circuit layouts, databases, registered or unregistered trademarks, brand names,
					business names, domain names and other forms of intellectual property;
				</li>

				<li><b>Tap A Tradie Worldwide&nbsp;</b>means:</li>

				<ul>
					<li>Tap A Tradie web platform accessible from&nbsp;<span>www.tapatradie.com</span>; and/or</li>

					<li>
						Tap A Tradie mobile application available from the Apple® App Store®, Google Play® and other mobile
						application marketplaces.
					</li>

					<li>Tradie web platform accessible from <span>www.tapatradie.com</span> and/or</li>

					<li>
						Tradie mobile application available from the Apple® App Store®, Google Play® and other mobile application
						marketplaces.
					</li>
				</ul>

				<li>
					<b>Job</b>&nbsp;means any Trade services, goods and materials provided by a Tradesperson, subject to a booking
					made by a Customer via Tap A Tradie Worldwide.
				</li>

				<li>
					<b>Job Fee&nbsp;</b>means the price paid by the Customer for a Job, as published by the Company (within Tap A
					Tradie Worldwide) and/or agreed between the Customer and the Company from time-to-time.
				</li>

				<li><b>Job Request&nbsp;</b>means a request for a Job made by a Customer via Tap A Tradie Worldwide.</li>

				<li>
					<b>Location&nbsp;</b>means the address of the Customer or other location where the Tradesperson is to attend
					the Job.
				</li>

				<li><b>Privacy Act&nbsp;</b>means the&nbsp;<i>Privacy Act&nbsp;</i>1989 (Cth).</li>

				<li>
					<b>Privacy Policy</b>&nbsp;means the Company’s privacy policy as updated from time-to-time, which can be found
					at&nbsp;<span>www.TapATradie.com/privacy-policy</span>
				</li>

				<li>
					<b>Service Fee</b>&nbsp;means a fee charged by Tap A Tradie Worldwide to a Tradesperson for arranging a Job.
				</li>

				<li>
					<b>Tax Invoice&nbsp;</b>has the meaning given by the&nbsp;<i
						>A New Tax System (Goods and Services Tax) Act&nbsp;</i
					>1999 (Cth).
				</li>

				<li>
					<b>Terms of Service</b>&nbsp;means the terms and conditions of using Tap A Tradie Worldwide, as updated from
					time-to-time, which can be found at&nbsp;<span>www.TapATradie.com/terms</span>.
				</li>

				<li><b>Trade&nbsp;</b>means any of the following trades, for which a Tradesperson is qualified to provide:</li>

				<ul>
					<li>Plumbing;</li>

					<li>Carpentry;</li>

					<li>Building;</li>

					<li>Painting;</li>

					<li>Joinery;</li>

					<li>Electrical;</li>

					<li>Plastering;</li>

					<li>Lawnmowing;</li>

					<li>Labouring;</li>

					<li>Landscaping;</li>

					<li>Glazier;</li>

					<li>Locksmith;</li>

					<li>Any other trade Tap A Tradie Worldwide may support for from time-to-time.</li>
				</ul>

				<li>
					<b>Tradesperson</b>&nbsp;means a user of Tap A Tradie Worldwide that undertakes Jobs for Customers, whether a
					person or business.
				</li>

				<li><b>User</b>&nbsp;means any Customer or Tradesperson that uses Tap A Tradie Worldwide.</li>

				<li><b>Confidential Information</b>&nbsp;means any written or verbal information that:</li>

				<ul>
					<li>Is about each party’s business or affairs;</li>

					<li>Is about the conduct of each party under this Agreement and the during the term of this Agreement;</li>

					<li>A party informs the other party that it considers it confidential and/or proprietary;</li>

					<li>A party would reasonably consider to be confidential in the circumstances; and</li>

					<li><b>Is personal information within the meaning of the Privacy Act.</b></li>
				</ul>
			</ul>
			<p>but does not include information thata party can establish:</p>
			<ul>
				<ul>
					<li>Was in the public domain at the time it was given to that party;</li>

					<li>
						Became part of the public domain, without that party’s involvement in any way, after being given to the
						party;
					</li>

					<li>
						Was in partys possession when it was given to the party, without having been acquired (directly or
						indirectly) from the disclosing party; or
					</li>

					<li>
						Was received from another person who had the unrestricted legal right to disclose that information free from
						any confidentiality obligation.
					</li>
				</ul>
			</ul>

			<p><b>User Submissions</b></p>
			<p><span>In App Purchases&nbsp;</span></p>
			<p>
				<span
					>Tap a tradie may offer services for purchase through mobile platforms such as iTunes and Google Play. Those
					purchases are governed by terms of the platforms. Most purchases are not refundable and certain services only
					grant you a specified license, as further described in the Agreement.</span
				>
			</p>

			<p><span>Subscription Details</span></p>
			<p>
				<span
					>The subscription plan is a 7 days auto renewable plan for 2.99 AUD. We even offer you a 30 days free trail.
					The perks of the plan are unlimited leads, directory listing and photo gallery.</span
				>
			</p>

			<p><b>General</b></p>
			<p>
				It is a condition of these Terms and Conditions that all information or content you post and/or submit to be
				posted or used on the Tap A Tradie and/or Tradie Apps, including all advertisements, photos and creative
				designs, are either your own works or works which you are using with the permission of the owner. Subject to any
				other clauses of these Terms and Conditions, by submitting information or content (including advertisements,
				photos and designs) to any part of the Tap A Tradie and/or Tradie Apps you automatically grant to us, or warrant
				that the owner of such information has expressly granted to us, a royalty-free, perpetual, irrevocable,
				worldwide non-exclusive license to use, reproduce, create derivative works from, modify, publish, edit,
				translate, distribute, disseminate, communicate, perform, and display your name and the information alone or as
				part of other works in any form, media, or technology whether now known or hereafter developed. You warrant that
				any and all information you post to the Tap A Tradie and/or Tradie Apps (i) complies with all relevant laws;
				(ii) does not infringe the intellectual property rights (including but not limited to copyright and trade marks)
				of any person; (iii) is not misleading or deceptive nor likely to mislead or deceive; and (iv) does not violate
				any privacy laws or regulations or confidentiality restrictions. You warrant that any and all information
				submitted by you and posted on the Tap A Tradie and/or Tradie Apps, including in any directories, is true,
				complete and correct.
			</p>
			<p><b>Ratings</b></p>
			<p>
				We may, from time to time, allow users who engage with a tradie through the Tap A Tradie and/or Tradie Apps to
				rate their experience with that tradie. While we verify that feedback comes from users who engaged with the
				tradie through the Tap A Tradie and/or Tradie Apps, the content of the feedback is the user’s opinion. The
				ratings are a collation of user feedback and do not constitute an endorsement or recommendation by us in
				connection with any tradie. Ratings are not a substitute for making your own inquiries as to the suitability of
				any tradie that you are considering hiring.
			</p>
			<p>
				You acknowledge that in submitting any rating feedback you will act honestly and fairly and that you will not do
				anything which might unfairly damage the reputation of a tradie or undermine the operation of the ratings
				system. We reserve the right to remove feedback from the star rating system which we deem to be inappropriate,
				deceptive or does not adhere to our feedback guidelines.<span>&nbsp;</span>
			</p>
			<p><b>Copyright in Reviews and comments</b></p>
			<p>
				By accepting these Terms and Conditions when registering your account, you hereby assign to us all present and
				future copyright in all of original content submitted or posted by you to the Tap A Tradie and/or Tradie Apps
				including without limitation: comments, forum posts, public messages, reviews, ratings and the compilation of
				any inspiration board (but not including the contents of any advertisement or advertiser’s profile). You also
				irrevocably authorise us to use the content in any way we please, including in a way that you might consider to
				infringe your moral rights in the content. For the avoidance of doubt, nothing in this paragraph requires you to
				create an account in order to be bound by these Terms and Conditions, and your use of the Tap A Tradie and/or
				Tradie Apps constitutes your agreement to these Terms and Conditions.
			</p>
			<p><b>Review of submissions</b></p>
			<p>
				Files that you upload, public messages that you send and your activity in dialogue, discussion, and forums on
				the Tap A Tradie and/or Tradie Apps are subject to review, modification and deletion without notice by the
				discussion or forum manager. Files that you upload to a bulletin board are subject to posted limitations on
				usage, reproduction and/or dissemination and you are responsible for adhering to such limitations. You should be
				aware that personally identifiable information you choose to disclose on the Tap A Tradie and/or Tradie Apps may
				be used by third parties and such use is beyond our control.
			</p>
			<p>
				You must not post any information which (i) is libellous, defamatory, obscene, offensive, sexually explicit,
				fraudulent, false, unlawful, or contrary to the ownership or intellectual property rights of any other person,
				or (ii) contains any virus, worm, trojan or other code which is contaminating or destructive to the files, data
				or programs of the Tap A Tradie and/or Tradie Apps or any of our users.
			</p>
			<p>
				We may deny you access to all or part of the Tap A Tradie and/or Tradie Apps and/or suspend or cancel your
				service account without notice if we, in our sole discretion, determine that you have engaged in conduct that
				violates any law or any provision of these Terms and Conditions or is otherwise inappropriate. We will not be
				liable for any loss of profit or business opportunity that may result from the suspension or cancellation of
				your service account.
			</p>
			<p><b>Copyright and Trade Marks</b></p>
			<p>
				The entire contents and design of the Tap A Tradie and/or Tradie Apps, including all trade marks, text, images
				and audio and video files, is proprietary to us or our content providers and is protected by copyright laws. The
				Tap A Tradie and/or Tradie Apps are for your personal, non-commercial use. You may not reproduce, modify, copy,
				distribute, transmit, communicate, display, publish or use any material contained in the Tap A Tradie and/or
				Tradie Apps and/or our other communication without our express prior written permission or the permission of the
				relevant copyright owner. You may not use any of the information or content on the Tap A Tradie and/or Tradie
				Apps for commercial purposes or to establish, operate or maintain your own product or service offering. You
				acknowledge that any breach by you of this paragraph may cause damage to us which cannot adequately be remedied
				by damages and that if you breach or act in a way which threatens to breach this paragraph, we may seek
				injunctive relief against you.
			</p>
			<p>Postcode mapping information supplied by, and copyright&nbsp;Google Maps<span>&nbsp;</span></p>
			<p><b>General Disclaimer</b></p>
			<p>
				The Tap A Tradie and/or Tradie Apps is provided on an as is, with all faults and as available basis and to the
				extent permitted by law without any warranties of any kind, either expressed or implied, including without
				limitation any implied warranties of merchantability, fitness for a particular purpose, warranties of title or
				non-infringement, or warranties arising from course of dealing or custom of trade. We make no representation or
				warranty that any content of the Tap A Tradie and/or Tradie Apps is accurate, complete, appropriate, reliable or
				timely. We also make no representation or warranty that your access to and use of the Tap A Tradie and/or Tradie
				Apps will be uninterrupted, secure, error-free, free of viruses or unauthorised code or other harmful
				components. We reserve the right to discontinue operating the Tap A Tradie and/or Tradie Apps at any time
				without notice.
			</p>
			<p><b>Use of the Tap A Tradie and/or Tradie Apps</b></p>
			<p>
				Your use of the <span>Tap A Tradie and/or Tradie Apps </span>is at your own risk. You are responsible for taking
				all precautions you believe necessary or advisable to protect you against any claim, damage, loss or hazard that
				may arise by virtue of your use of the <span>Tap A Tradie and/or Tradie Apps</span>. Neither we nor anyone else
				involved in creating, producing or delivering the Tap A Tradie and/or Tradie Apps, our e-newsletters, or the
				materials contained therein assumes any liability or responsibility for the accuracy, completeness or usefulness
				of any information provided therein, nor, to the extent permitted by law, shall any of them be liable for any
				direct, indirect, incidental, special, consequential or punitive damages arising out of your use of, or
				inability to use, the Tap A Tradie and/or Tradie Apps.
			</p>
			<p>
				You must not use any means of automatically searching or mining data from the Tap A Tradie and/or Tradie Apps or
				in any way interfere or attempt to interfere with the proper operation of the Tap A Tradie and/or Tradie Apps.
			</p>
			<p>
				You agree not to take any action that imposes an unreasonable burden on our infrastructure or otherwise tampers
				or interferes with the Tap A Tradie and/or Tradie Apps, our systems or data or those of any third party via the
				<span>Tap A Tradie and/or Tradie Apps</span>.<span
					><b><span>&nbsp;</span></b></span
				>
			</p>
			<p><b>Using Tap A Tradie Worldwide</b></p>
			<ul>
				<li><b>General</b></li>
				<ul>
					<li>
						To use Tap A Tradie Worldwide, the User must login to Tap A Tradie Worldwide and have set up their account.
					</li>

					<li>
						The User agrees that all use of Tap A Tradie Worldwide, and all Jobs booked through Tap A Tradie Worldwide,
						are subject to these Terms of Service.
					</li>

					<li>
						When a Tradesperson accepts a Job from a Customer, that forms an independent agreement between the
						Tradesperson and the Customer on the terms set out in this Agreement.
					</li>

					<li>
						Anyone over the age of 18 may use Tap A Tradie Worldwide to request and book Jobs in the areas in which
						Tradespersons operate.&nbsp;
					</li>

					<li>
						The Customer acknowledges that each Job is performed independently by the Tradesperson, and that the Company
						does not provide any of the services in a Job directly to the Customer.&nbsp;
					</li>
				</ul>

				<li><b>Features</b></li>

				<ul>
					<li>Tap A Tradie Worldwide enables Customers to:</li>

					<ul>
						<li>Request and book Jobs with Tradespersons;</li>

						<li>Request and book Jobs with Tradespersons; &nbsp;</li>

						<li>Rate Tradespersons and Jobs; and &nbsp;</li>

						<li>Manage their Tap A Tradie Worldwide account (including history of services and payments).</li>
					</ul>

					<li>Tap A Tradie Worldwide enables the Tradesperson to:</li>

					<ul>
						<li>Receive requests from Customers for Jobs;</li>

						<li>Accept and reject requests for Jobs;</li>

						<li>Manage accepted Jobs;</li>

						<li>Log work undertaken and confirm completion of Jobs;</li>

						<li>Manage conversations with the tradesperson.</li>

						<li>Manage their Tap A Tradie Worldwide account (including history of services and payments).</li>
					</ul>
				</ul>
			</ul>
			<p><b>Using Tap A Tradie Worldwide</b></p>
			<ul>
				<li><b>Making a Booking</b></li>

				<ul>
					<li>
						To book a Job, the Customer may make a Job Request from within Tap A Tradie Worldwide, at any time 24 hours
						a day, 7 days a week.
					</li>

					<li>
						The Customer shall be required to provide necessary details of the required Job in order to make a Job
						Request, including but not limited to:
					</li>

					<ul>
						<li>The Location;</li>

						<li>The nature of the Job;</li>

						<li>Any Equipment &amp; Materials as part of the Job;</li>

						<li>Any additional notes for the Tradesperson (e.g. how to access the Customer’s premises).</li>
					</ul>

					<li>Any additional notes for the Tradesperson (e.g. how to access the Customer’s premises).</li>

					<li>
						The first Tradesperson that confirms the Job shall be responsible for providing the Jobs in relation to the
						Job Request, and the Company will provide their details to the Customer.
					</li>

					<li>
						The Tradesperson must provide an estimated time of arrival for the commencement of the Job when confirming.
					</li>

					<li>The Company does not guarantee that a Tradesperson will accept any Job Request.</li>

					<li>The Tradesperson may require the Customer to pay a Deposit on confirmation of a Job.</li>

					<li>
						The value of a Deposit shall be determined by the Tradesperson, and be applied against the Job Fee. This
						will be between the client and the tradesperson.
					</li>
				</ul>

				<li><b>Undertaking the Job</b></li>

				<ul>
					<li>The Tradesperson agrees to arrive at the Location on time.&nbsp;</li>

					<li>
						The Tradesperson will undertake the Job to a professional standard, for the outcome booked in the Job. Where
						a Job is not completed to a satisfactory standard (as determined by the Company, acting reasonably) the
						Tradesperson will rectify the issue at the earliest availability. (Tap A Tradie do not get involved in
						disputes between tradie’s and customers; we provide an introduction service only.)
					</li>

					<li>
						Where the Job Fee includes the provision of Equipment &amp; Materials, the Tradesperson where possible will
						ensure they have those with them. Otherwise, the Customer must ensure they have all necessary Equipment
						&amp; Materials for the Tradesperson to perform the Job.
					</li>

					<li>
						The Customer must ensure that it provides the Tradesperson with a safe working environment, whether in a
						domestic or commercial setting. Without limitation, the Customer agrees:
					</li>

					<ul>
						<li>To safely restrain all animals;</li>

						<li>
							Ensure that all electrical equipment is in safe working order and approved for use (unless the Job relates
							to a Tradesperson that is an electrician);
						</li>

						<li>To notify the Tradesperson of any dangerous environments or hazards; and</li>

						<li>There are no unannounced persons in the Location.</li>
					</ul>

					<li>
						The Customer agrees that the Tradesperson is not liable for minor wear and tear during a Job. The
						Tradesperson shall not be liable for any breakage with a value of under $100 if such breakage was genuinely
						accidental and in the course of providing the Job. The Customer agrees that the Tradesperson shall have the
						first right to rectify, repair or resupply services to remedy any damage or incomplete work. &nbsp;
					</li>
				</ul>

				<li><b>Cancellations</b></li>

				<ul>
					<li>A Customer may cancel a Job within 5 minutes of the Job being confirmed.</li>

					<li>
						A Customer that cancels a Job later than 5 minutes after the confirmation of a Job may be charged a
						Cancellation Fee.
					</li>

					<li>The Company may deduct the value of a Cancellation Fee from a Deposit.</li>

					<li>A Tradesperson must not cancel a Job once confirmed, unless agreed otherwise with a Customer.</li>

					<li>
						Where a Tradesperson is unable to attend a Job, the Company shall use its best endeavours to find a
						replacement Tradesperson, however if an alternate Tradesperson cannot be found, the Company shall not be
						liable to the Customer (although no Job Fees will be charged by Tap a Tradie).
					</li>
				</ul>

				<li><b>Ratings</b></li>

				<ul>
					<li>
						The Customer may use the rating system inside Tap A Tradie Worldwide to rate and provide feedback on the
						Tradesperson and each Job.
					</li>

					<li>
						The Customer agrees to provide accurate information and to not unreasonably give a Tradesperson or a Job a
						low rating.
					</li>

					<li>
						If the Customer is unsatisfied with the standard of a Job, the Customer must first discuss the matter with
						the Tradesperson. Tap a Tradie hold no responsibility for quality of tradespeople found on our app or
						website.
					</li>

					<li>The Company may suspend a Tradesperson’s account if it consistently receives negative ratings.&nbsp;</li>

					<li>The decision to suspend or reinstate a Tradespersons’ account is at the Company’s sole discretion.</li>
				</ul>
			</ul>
			<p><b>Direct contracting between customers and service providers</b></p>
			<ul>
				<li>
					Without the written consent of the Company, the Tradesperson shall not directly contract to provide services
					to a Customer outside of the Platform (and thereby exclude the Company) within 12 months of the last day that
					the Tradesperson attended a Job at the relevant Customer. Where such a direct relationship is formed without
					the consent of the Company, the Customer agrees to pay to the Company 30% of the Job Fees that would have
					applied to had those services been undertaken as Jobs.
				</li>
			</ul>
			<p><b>Relationship</b></p>
			<ul>
				<li>
					The parties agree that the Tradesperson is an independent contractor to the Customer. Each Tradesperson and
					Customer is responsible to each other with respect to each Job. The parties acknowledge and agree that:
				</li>

				<ul>
					<li>
						The Tradesperson is not an employee or subcontractor of the Company, and the Tradesperson does not provide
						any services to Customers on behalf of the Company;
					</li>

					<li>The Company is only the Tradesperson’s agent for the purpose of arranging Jobs.</li>

					<li>The Tradesperson is not an employee of the Customer or the Company; and</li>

					<li>The Company is not an agent of the Customer.</li>
				</ul>

				<li>
					All Jobs provided by a Tradesperson may be subject to the Tradesperson’s usual terms of business in addition
					to the terms of this Agreement. This Agreement shall prevail in the event of a conflict between this Agreement
					and a Tradesperson’s usual terms of business.
				</li>
			</ul>
			<p><b>General Conditions</b></p>
			<ul>
				<li><b>Licence</b></li>

				<ul>
					<li>
						By accepting the terms and conditions of this Agreement, the User is granted a limited, non-exclusive and
						revocable licence to access and use Tap A Tradie Worldwide for the duration of this Agreement, in accordance
						with the terms and conditions of this Agreement.
					</li>

					<li>
						The Company may issue the licence to the User on the further terms or limitations (including the number of
						users or volume of use or transactions) as it sees fit.
					</li>

					<li>
						The Company may revoke or suspend the User’s licence(s) in its absolute discretion for any reason that it
						sees fit, including for breach of the terms and conditions in this Agreement by the User.
					</li>
				</ul>

				<li><b>Modification of Terms</b></li>

				<ul>
					<li>The terms of this Agreement may be updated by the Company from time-to-time.</li>

					<li>
						Where the Company modifies the terms, it will provide the User with written notice, and the User will be
						required to accept the modified terms in order to continue using Tap A Tradie Worldwide.
					</li>
				</ul>

				<li><b>Software-as-a-Service</b></li>

				<ul>
					<li>The User agrees and accepts that Tap A Tradie Worldwide is:</li>

					<ul>
						<li>
							Hosted by the Company and shall only be installed, accessed and maintained by the Company, accessed using
							the internet or other connection to the Company servers and is not available ‘locally’ from the User’s
							systems; and
						</li>

						<li>
							Managed and supported exclusively by the Company from the Company servers and that no ‘back-end’ access to
							Tap A Tradie Worldwide is available to the User unless expressly agreed in writing.
						</li>
					</ul>

					<li>
						As a hosted and managed service, the Company reserves the right to upgrade, maintain, tune, backup, amend,
						add or remove features, redesign, improve or otherwise alter Tap A Tradie Worldwide.
					</li>
				</ul>

				<li><b>Use &amp;&nbsp;Availability</b></li>

				<ul>
					<li>
						The User agrees that it shall only use Tap A Tradie Worldwide for legal purposes and shall not use it to
						engage any conduct that is unlawful, immoral, threatening, abusive or in a way that is deemed unreasonable
						by the Company in its discretion.
					</li>

					<li>
						The User is solely responsible for the security of its username and password for access to Tap A Tradie
						Worldwide. The User shall notify the Company as soon as it becomes aware of any unauthorised access of its
						Tap A Tradie Worldwide account.
					</li>

					<li>
						The User agrees that the Company shall provide access to Tap A Tradie Worldwide to the best of its
						abilities, however:
					</li>

					<ul>
						<li>Access to Tap A Tradie Worldwide may be prevented by issues outside of its control; and</li>

						<li>It accepts no responsibility for ongoing access to Tap A Tradie worldwide.</li>
					</ul>
				</ul>
			</ul>
			<p><b>Disclaimer</b></p>
			<p>
				We strive to provide valuable and accurate information. The editors of the material contained in the
				<span>Tap A Tradie and/or Tradie Apps </span>have consulted sources believed to be reliable in their efforts to
				provide information that is correct at the time of posting. However, in view of the possibility of error by the
				authors, editors, or publishers of the works contained in the
				<span>Tap A Tradie and/or Tradie Apps </span>neither we nor any other party involved in the preparation of
				material contained in the <span>Tap A Tradie and/or Tradie Apps </span>Site or in our e-newsletters represents
				or warrants that the information contained therein is in every respect accurate or complete, and they assume no
				responsibility for any errors or omissions or for the results obtained from the use of such material. You are
				encouraged to confirm the information contained therein with other sources.
			</p>
			<p>
				Consumers reading articles or other material posted on the
				<span>Tap A Tradie and/or Tradie Apps </span>or e-newsletters should review the information carefully. The
				information is not intended in any way to be a substitute for professional advice. Neither the content nor any
				other service offered through the <span>Tap A Tradie and/or Tradie Apps </span>or our e-newsletters is intended
				as professional advice.
			</p>
			<p>
				We do not examine, determine or warrant the certification and/or licensing, competence, solvency or information
				of any professional or facility listed in our directories. We rely on the professionals or the facilities listed
				in our directories to provide accurate information and assume no responsibility for verifying the information
				provided. Use of our directories to locate a professional or facility is wholly voluntary and, to the extent
				permitted by law, in no event will we or any of our agents be liable for damages to any user of our directories
				for the selection of a professional or facility or for the services provided by any professional or facility
				listed therein, or for any other loss or damage which may occur as a result thereof. We recommend that you check
				the certification and/or licensing of any professional or other service provider with the applicable licensing
				Board or authority.
			</p>
			<p>
				You should satisfy yourself as the competence, solvency, insurances and licensing of anybody you decide to
				retain as a result of a connection made through our services, including the Request Tradie service. Under no
				circumstances shall we be liable for any damages whatsoever as a result of losses caused to you by a person or
				entity that you retain as a consequence of using our directory or services.
			</p>
			<p>
				The <span>Tap A Tradie and/or Tradie Apps </span>may contain links to web sites operated by third parties. The
				linked sites are not under our control and we are not responsible for the contents of any linked site or any
				link contained in a linked site or any changes or updates to such sites. The appearance of any product, service
				or web site link on the <span>Tap A Tradie and/or Tradie Apps </span>and/or in our e-newsletters does not imply
				endorsement, approval or warranty by us and we disclaim all liability with regard to any such products, services
				or web site links.
			</p>
			<p><b>Payment Facilitator</b></p>
			<p>
				We use Google and Apple Inc. Payment Platforms as third party service provider for app based payment services to
				facilitate payments for weekly and yearly subscriptions for tradespeople using the “Tradie” App advertising
				through the “Tradie” App. Payments amounts are automatically converted into currencies based on Tradie location.
			</p>
			<p>
				Google Payments and agreeing to the Google Payments&nbsp;<span>Terms of Service</span>&nbsp;and&nbsp;<span
					>Privacy Notice</span
				>.
			</p>
			<p>
				Apple Inc. App Store Payments -
				<i
					>Payment will be charged to your&nbsp;Apple ID&nbsp;account at the confirmation of purchase. Subscription
					automatically renews unless it is cancelled at least 24 hours before the end of the current period. Your
					account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and
					cancel your subscriptions by going to your account settings on theApp&nbsp;Store&nbsp;after purchase.</i
				>
			</p>
			<p><b>Job fees, payments &amp; refunds</b></p>
			<ul>
				<li>
					The Customer shall pay the Tradesperson the Job Fee for a Job undertaken by a Tradesperson. The Tradesperson
					will issue a Tax Invoice to the Customer for the Job. It is the clients responsibility to check the
					tradesperson can issue a tax receipt prior to engagement.
				</li>
			</ul>

			<p><b>Disclaimer</b></p>
			<p>You (as Customer or Tradie) agree and acknowledge that:</p>
			<p>
				• Unless otherwise specified, the Services (including Jobs) are provided by Tradies, or other third party
				providers, who are independent third parties and are not employed by or agents of Tap A Tradie Worldwide;
			</p>
			<p>• Any agreement to provide the Services (including Jobs) is between the Customer and Tradie only;</p>
			<p>
				• The Services may also be subject to any terms and conditions between the Customer and the Tradie or other
				third party provider of those Services;
			</p>
			<p>
				• Your use of the Tap A Tradie and/or Tradie Apps, including booking (or, in the case of Tradies, accept any
				booking for) any Job or Services is subject to Tap A Tradie Worldwide’s terms and conditions (available at
				https://tapatradie.com/terms) (“Tap A Tradie Worldwide’s terms and conditions”), including the disclaimers,
				limitations of liability and indemnities by you under those terms and conditions;
			</p>
			<p>
				• Tap A Tradie Wordwide has no obligation to deliver the Services, and makes no representation or warranty, and
				accepts no liability whatsoever in respect of the Services or any Job (except to the extent that cannot be
				excluded under any consumer law or other law, which shall remain in full force and effect).
			</p>
			<p><b>Privacy</b></p>
			<p>
				Tap A Tradie Worldwide collects personal information in order to improve service and offerings, and may, for
				this purpose, disclose such personal information to third parties, including but not limited to agents,
				contractors, service providers, suppliers and, as required, to Australian regulatory authorities. Tap A Tradie
				will also use and handle your personal information in accordance with its privacy policy (Privacy&nbsp;Policy),
				which can be accessed at https://tapatradie.com/privacy. In addition to any use that may be outlined in the
				Privacy Policy, Tap A Tradie Worldwide may also, for an indefinite period, unless otherwise advised, use the
				personal information for promotional, marketing, publicity, research and profiling purposes, including sending
				electronic messages or telephoning you. You should direct any request to opt out, access, update or correct your
				personal information to Tap A Tradie and direct any complaints regarding treatment of your personal information
				in accordance with the Privacy Policy.
			</p>
			<p><b>Additional terms for Tradies</b></p>
			<p>• The following terms apply to Tradies in addition to the other terms above.</p>
			<p>
				• These Terms apply in addition to the Tap A Tradie Wordwide Terms &amp; Conditions between the&nbsp;Tradie and
				Tap A Tradie Worldwide.
			</p>
			<p>• Auto-renew subscription charges and any other applicable charges will continue to apply Tradie listing.</p>
			<p>
				• If a Job or Services are cancelled or refunded, or required to be cancelled or refunded, for any reason, Tap A
				Tradie Worldwide shall have no obligation to pay to the Tradie. Tap A Tradie Worldwide may, in its sole
				discretion, waive this requirement for a particular payment, Job or Services, but only in writing signed by Tap
				A Tradie Worldwide.
			</p>
			<p>
				• Indemnity: The Tradie agrees to indemnify Tap A Tradie Worldwide, and its officers, employees agents and
				representatives, for any loss, damage, claim, liability or demand (howsoever arising, and whether at law, in
				equity, under statute or otherwise) arising out of the performance, or acceptance, by the Tradie of a Job or
				Services to which these Terms apply, or any breach of these Terms by the Tradie, except to the extent the loss,
				damage, claim, liability or demand arises out of the gross negligence or wilful default of Tap A Tradie, or the
				officer, employee, agent or representative.
			</p>

			<p><b>Tradesperson terms of use</b></p>
			<ul>
				<li><b>Qualifications.&nbsp;</b>The Tradesperson is responsible for ensuring:</li>

				<ul>
					<li>All qualifications and permits relative to the Tradesperson’s Trade are accurate and up to date; and</li>

					<li>The Tradesperson is qualified by law to provide the Jobs.</li>
				</ul>

				<li><b>Jobs.</b></li>

				<ul>
					<li>The Tradesperson must provide the Jobs to the Customer for each Job Request it Confirms.</li>

					<li>If the Job is performed by an employee or contractor of the Tradesperson, the Tradesperson shall:</li>

					<ul>
						<li>Remain liable for each such employee or contractor; and</li>

						<li>Ensure each employee or contractor complies with the terms of this Agreement.</li>
					</ul>
				</ul>

				<li><b>Payments to Tradespersons.</b></li>

				<ul>
					<li>The Tradesperson must submit an invoice within 24 hours of completing a Job (<b>Job Invoice</b>).</li>

					<li>A Job Invoice must include sufficient details. Such details may include:</li>

					<ul>
						<li>The cost of labour provided by the Tradesperson;</li>

						<li>The cost of any Equipment &amp; Materials supplied by the Tradesperson;</li>

						<li>GST&nbsp;information;</li>

						<li>Such other information as Tap A Tradie Worldwide may require from time-to-time.</li>
					</ul>

					<li>
						Where a Job takes place in Australia, the Tradesperson must supply an active ABN in order to receive payment
						via Tap A Tradie Worldwide.
					</li>

					<li>The Tradesperson agrees and warrants that:</li>
				</ul>
			</ul>
			<p>
				To the extent permitted by law the Tradesperson indemnifies and will hold the Company harmless against all
				costs, claims damages and expenses for any:
			</p>
			<ul>
				<ul>
					<ul>
						<li>Penalty imposed upon the Tradesperson;</li>

						<li>Injury, illness or death caused to a Customer or Third Party;</li>

						<li>Damage to the property of any Customer or Third Party;</li>

						<li>Claim of infringement of intellectual property rights made by a Third Party;</li>

						<li>Claim of breach of confidentiality by any Third Party;</li>
					</ul>
				</ul>
			</ul>
			<p><b>As a result of the Tradesperson’s use of Tap A Tradie Worldwide</b></p>
			<ul>
				<li>
					It shall not store or record any Personal Information that it can access through Tap A Tradie Worldwide unless
					it is fully compliant with the Privacy Act;
				</li>

				<li>
					It shall ensure that all information that it makes available through Tap A Tradie Worldwide is accurate and up
					to date, including (but not limited to) information supplied for:
				</li>

				<ul>
					<li>Creating an account;</li>

					<li>Describing the Tradesperson;</li>

					<li>Notifying Users;</li>

					<li>Generating a Job Invoice; and</li>

					<li>Any other information that may be accessed by the Tradesperson or an Individual;</li>
				</ul>

				<li>
					It shall not disclose any information about a Customer to any other person or party other than as authorised
					by the Customer;
				</li>

				<li>
					It shall ensure all personal information it has access to through its use of Tap A Tradie Worldwide is kept
					and used in accordance with applicable privacy laws in the jurisdiction;
				</li>

				<li>It shall only use Tap A Tradie Worldwide for its intended purpose as set out in this Agreement;</li>

				<li>It shall comply with all anti-SPAM legislation in its jurisdiction;</li>

				<li>
					Its licence to use Tap A Tradie Worldwide, as provided for in the General Conditions, is subject to the
					payment of all necessary Fees.
				</li>

				<li>It complies with all tax laws in each relevant jurisdiction.</li>

				<li>
					Any person who registers as a Tradesperson in Tap A Tradie Worldwide warrants that he or she is an authorised
					representative of that Tradesperson with the requisite authority to bind the Tradesperson to this Agreement.
				</li>
			</ul>
			<p><b>Registration</b></p>
			<p>
				You must register and obtain a service account in order to submit information to the Tap A Tradie and/or Tradie
				Apps. Your service account will then be activated and you will be issued a password which will be sent to you by
				sms or email.
			</p>
			<p>
				You must not disclose your password to any third party and you are responsible for keeping it confidential. We
				will never ask you to send your password or other sensitive information to us in an email or to enter it via any
				app other than Tap A Tradie and/or Tradie Apps. If you suspect any unauthorised use of your service account or
				access to your password, please change your password immediately and contact us. You are solely responsible for
				any and all use of your service account.
			</p>
			<p>
				You may close your service account at any time but you will remain liable for obligations related to your
				service account after it has been closed. The sections in these Terms and Conditions headed Copyright and Trade
				Marks, General Disclaimer, Disclaimer, Indemnification, Waiver, Release and Limitation of Liability and Third
				Party Rights and the first paragraph of the section headed User Submissions will continue to apply once your
				service account has been closed.
			</p>
			<p><b>Designated Copyright Representative</b></p>
			<p>
				The Copyright Regulations 1969 (Cth) establish a safe harbour scheme which limits the remedies available against
				carriage service providers for copyright infringement relating to certain online activities. Our designated
				representative to receive notifications and notices issued under that scheme in relation to all activities
				carried out by us as a carriage service provider is:
			</p>
			<p>
				Email:&nbsp;<span>info@tapatradie.com</span><br />
				Postal address: 203 Underwood Avenue, Floreat, WA, Australia
			</p>
			<p><b>Indemnification</b></p>
			<p>
				You agree to indemnify, defend and hold harmless us and our officers, directors, employees, agents, information
				providers, partners, advertisers, licensors and suppliers from and against all losses, expenses, damages and
				costs, including reasonable solicitors fees, resulting from any violation of these Terms and Conditions or any
				activity related to your service account (including infringement of third parties intellectual property rights
				anywhere in the world or negligent or wrongful conduct) by you or any other person accessing the Tap A Tradie
				and/or Tradie Apps using your service account.
			</p>
			<p><b>Waiver, Release and Limitation of Liability</b></p>
			<p>
				You agree that to the extent permitted by law neither we, nor our officers, directors, employees, agents,
				information providers, partners, advertisers, licensors or suppliers shall have any liability to you under any
				theory of liability or indemnity in connection with your use of the Tap A Tradie and/or Tradie Apps. You hereby
				release and forever waive any and all claims you may have against us or our officers, directors, employees,
				agents, information providers, partners, advertisers, licensors or suppliers (including but not limited to
				claims based upon our negligence or the negligence of our officers, directors, employees, agents, information
				providers, partners, advertisers, licensors or suppliers) for any loss or damage you sustain in connection with
				your use of the Tap A Tradie and/or Tradie Apps. Our liability for any claim arising from a breach of any term
				or condition implied by any law which may not be excluded will be limited to the maximum extent permissible
				which, in the case of services, will be to the re-supply of the relevant services or the payment of the cost of
				having the relevant services re-supplied.
			</p>
			<p>
				Notwithstanding the foregoing paragraph, to the extent permitted by law, the total liability of us, our
				officers, directors, employees, agents, information providers, partners, advertisers, licensors and suppliers,
				if any, for any loss or damage arising in connection with the Tap A Tradie and/or Tradie Apps shall not exceed
				the greater of the amount of fees paid by you for the particular information or service provided or AUD$200.
				Except where such limitation is prohibited by law, in no event shall we, our officers, directors, employees,
				agents, information providers, partners, advertisers, licensors or suppliers be liable to you for any loss or
				damage other than the amount referred to above, and their liability for all other loss or damage, whether direct
				or indirect, special, incidental, consequential or punitive, arising from any use of the Tap A Tradie and/or
				Tradie Apps is hereby excluded even if we or our officers, directors, employees, agents, information providers,
				partners, advertisers, licensors or suppliers have been advised of the possibility of such damages.
			</p>
			<p>
				Neither we, nor any of our affiliates, directors, officers or employees, nor any third party vendor will be
				liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure
				or interruption of the hipages.com.au Web Site, or resulting from the act or omission of any other party
				involved in making the hipages.com.au Web Site or the information contained therein available to you, or from
				any other cause relating to your access to or your inability to access the Tap A Tradie and/or Tradie Apps or
				that information, whether or not the circumstances giving rise to such cause may have been within our control or
				the control of any vendor providing software or services support to us.
			</p>
			<p><b>Third Party Rights</b></p>
			<p>
				The provisions of Indemnification and the Waiver, Release and Limitation of Liability are for our benefit and
				the benefit of our officers, directors, employees, agents, partners, advertisers, information providers,
				licensors and suppliers. Each of these individuals or entities shall have the right to assert and enforce those
				provisions directly against you on its own behalf.
			</p>
			<p><b>Miscellaneous</b></p>
			<p>
				Advertisers and sponsors of the Tap A Tradie and/or Tradie Apps and/or its e-newsletters have no influence on
				editorial content or presentation.
			</p>
			<p>
				You may not assign or transfer any of your rights or obligations under these Terms and Conditions without our
				prior written consent.
			</p>
			<p>
				Our relationship with you under these Terms and Conditions is one of independent contractors and not of
				partnership, joint venture or principal and agent.
			</p>
			<p>
				We will send any legal notices or communications regarding your service account to your nominated email address.
				Please ensure that a valid email address is recorded at all times. Your primary point of contact with us should
				be via the "Help" facility on the Tap A Tradie and/or Tradie Apps Any formal notices or communications should be
				sent to our postal address set out at the beginning of these Terms and Conditions. A notice sent to you by email
				or facsimile will be deemed to have been received by you 24 hours after it was sent, regardless of whether or
				not you have actually read the notice. Notices sent by mail will be deemed to have been received 3 days after
				the date of mailing (7 days if sent to or from outside Australia).
			</p>
			<p>
				If any clause or provision of these Terms and Conditions is determined to be illegal, invalid or unenforceable
				or capable of termination by a party in any jurisdiction in which these Terms and Conditions are to operate,
				then such clause or provision will be construed, to the extent feasible, to render the clause or provision
				enforceable. If no feasible interpretation would save such clause or provision, it will be severed from the
				remainder of these Terms and Conditions without affecting the enforceability of all remaining clauses and
				provisions.
			</p>
			<p>These Terms and Conditions are governed by the laws of Western Australia, Australia.</p>
			<p>Last updated on 15/08/2019<span>.</span></p>--> */}
        Effective Date October 10, 2021
        <br />
        <br />
        IMPORTANT NOTICE: THESE TERMS REQUIRE BINDING ARBITRATION TO RESOLVE ANY
        DISPUTE OR CLAIM RELATING TO THESE TERMS, THE SERVICES OR PROPERTIES OR
        ANY RELATIONSHIP BETWEEN US. ANY SUCH DISPUTE OR CLAIM WILL BE RESOLVED
        ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED OR
        REPRESENTATIVE ACTION OR ARBITRATION. THESE TERMS ALSO CONTAIN A
        DISCLAIMER OF WARRANTIES AND A DISCLAIMER OF LIABILITY, AS WELL AS A
        RELEASE AND INDEMNIFICATION BY YOU. PLEASE READ THEM CAREFULLY. SERVICE
        PROVIDERS: TAP A TRADIE IS NOT LIMITED TO ARBITRATION AS TO ACTS OF
        FRAUD OR OTHER WILLFUL MISCONDUCT BY YOU, WHICH TAP A TRADIE MAY ADDRESS
        BY ALL LAWFUL MEANS.
        <br />
        <br />
        <h3>
          <strong>Part 1: Agreement to Terms</strong>
        </h3>
        <br />
        <br />
        <u>Guide to Terms and Conditions.</u> <br />
        These terms of use have several parts: <br />
        <br />
        Part 1, Agreement to Terms and Part 2, General Terms apply to you in all
        cases, whether you are a User or a Service Provider or other user of the
        Services or Properties (as those terms are defined below).
        <br />
        <br />
        Part 3, Additional Terms for Service Providers, contains additional
        terms applicable to home services professionals and other service
        providers who use the Services.
        <br />
        <br />
        <u>Agreement to Terms.</u> <br />
        This constitutes a legally binding contract between Tap A Tradie Pty Ltd
        ("Tap A Tradie," "we," "us") and you, with respect to your use of this
        Web site, our mobile applications, our related services and other Tap A
        Tradie web and digital properties (collectively, the "Properties"), and
        all products and services available from Tap A Tradie, service providers
        or other third parties in connection with the Properties (individually
        and collectively with the Properties, the "Services"). By accessing or
        using the Services, you acknowledge that you have read, understood, and
        agree to be bound by these terms of use, our Privacy Policy (located 
        <a href="https://tapatradie.com/#/privacy-policy">here</a>) and any
        applicable Additional Program Terms (as defined below), including any
        updates posted here or otherwise communicated to you (collectively, the
        “Terms”). If you do not agree to the Terms, please do not use the
        Services. <br />
        <br />
        References to Tap A Tradie (or “we” or “us”) in the Terms include Tap A
        Tradie’s service providers or suppliers, to the extent that such service
        providers or suppliers are acting for or on behalf of Tap A Tradie with
        respect to the Properties. For the avoidance of doubt, this does not
        include the providers of home-related services referred to in the Terms
        as “Service Providers” or “Pros,” which act on their own behalf and not
        for or on behalf of Tap A Tradie.
        <br />
        <br />
        <u>Changes to Terms.</u> <br />
        We may modify the Terms at any time by posting a revised version. Any
        changes to the Terms will be effective immediately upon posting. Please
        review the Terms each time you use the Services as your continued use of
        the Services after such changes will constitute acceptance of, and
        agreement to, such changes. You waive any right you may have to receive
        specific notice of such changes.
        <br />
        <br />
        <u>Consent.</u>
        <br />
         If you are accessing and using the Services, you affirm that you are at
        least 18 years of age or the age of majority in your jurisdiction,
        whichever is greater, and are fully able and competent to enter into,
        and comply with, the Terms. If you are accessing and using the Services
        on behalf of a company or other legal entity, you represent that you
        have the authority to bind that entity to the Terms. In that situation,
        "you" and "your" will refer to both you and that entity.
        <br />
        <br />
        <u>Our Privacy Policy.</u> <br />
        Our Privacy Policy, which describes how we collect and use information
        from our users, is available 
        <a href="https://tapatradie.com/#/privacy-policy">here</a>, as well as
        through the link titled "Privacy" on our homepage and other locations
        within the Properties. <br />
        <br />
        <u>Other Program Terms.</u> <br />
        Certain programs offered by Tap A Tradie through the Services may have
        additional terms and conditions (the “Additional Program Terms”). If you
        elect to participate in one of these programs, Tap A Tradie will
        communicate the applicable Additional Program Terms to you. By
        participating in that program, you acknowledge that you have read,
        understood, and agree to be bound by, the Additional Program Terms,
        which will be deemed to be a part of the Terms.
        <h3></h3>
        <br />
        <br />
        <h3>
          <strong>Part 2: General Terms</strong>
        </h3>
        <br />
        <br />
        <h4>Our Services</h4>
        <br />
        <u>Services We Provide.</u> <br />
        Tap A Tradie connects homeowners and other users of the Services (each,
        a "User") with providers of home-related &amp; commercial services
        (each, a “Service Provider").
        <br />
        <br />
        Through Tap A Tradie, Service Providers can make their products and
        services available to Users in response to project requests or
        inquiries. Other Services, when clearly and explicitly designated, may
        be provided and billed for by Tap A Tradie.
        <br />
        <br />
        <u>
          No Responsibility, Endorsement or Guarantee for Service Providers;
          Estimates.
        </u>
         <br />
        <br />
        Tap A Tradie does not deliver, and is not responsible for, any Service
        Provider’s products, services or advice. Tap A Tradie is not an agent of
        any Service Provider, and Service Providers are not employees or agents
        of Tap A Tradie. Tap A Tradie does not engage the Service Provider,
        except through the Tap A Tradie Services program in which Tap A Tradie
        books, manages and handles payment for certain services provided to
        Users by Service Providers. Neither Tap A Tradie nor any third party
        that refers you to the Services sponsors, endorses, recommends or
        approves any Service Provider. While we try to confirm that Service
        Providers meet certain requirements, we cannot and do not represent or
        warrant that any Service Provider is licensed, qualified, bonded,
        insured or capable of performing any service. We do not make any
        guarantees, warranties or representations of any kind regarding any
        Service Provider or any products, services or advice of any Service
        Provider, and neither we nor any third party that refers you to the
        Services will be responsible for any action or inaction of any Service
        Provider. For additional clarity, any reference to or use by any Service
        Provider of any Services, Properties, or trademarks or other brands or
        names of Tap A Tradie does not in any way change the disclaimers by Tap
        A Tradie regarding Service Providers as described in this paragraph.
        Reference to any products, services or other information by trademark,
        manufacturer, supplier or otherwise does not constitute or imply an
        endorsement, sponsorship or recommendation by us. We do not guarantee
        that the Services can match a User’s service needs with a Service
        Provider or that there are Service Providers in a User’s area that are
        capable of and willing to meet a User’s service needs. Any quote or
        estimate provided in connection with the Services is only a guide, not a
        contractually binding offer, and is not a guarantee of the actual cost
        of your specific project. When a Service Provider provides you with
        products, services or advice, your rights will be governed by your
        contract with the Service Provider and by applicable federal, state and
        local laws. <br />
        <br />
        <h4></h4>
        <h4>Accounts and Charges for Users</h4>
        <br />
        &nbsp;
        <h4>
          <u>User Account.</u>
          <br />
           Account registration is required for Users to receive or use certain
          Services. When you open or confirm an account, you will be required
          provide us with specified personal information, which may include your
          name, address, mobile phone number, and (if applicable) credit card
          payment details. You must keep your account information complete,
          accurate and current at all times. You agree to maintain the security
          of your account information and that you are responsible for all
          activity in connection with your account. By creating your account,
          you agree that communication may be made with you via telephone,
          email, text (SMS) message or other reasonable electronic or
          non-electronic means, at any of the contact numbers or addresses you
          provide, as part of the normal business operation of the Services.
        </h4>
        <br />
        <br />
        <u>Charges.</u> <br />
        When Service Providers perform work for you, you will be charged for the
        products or services they provide by the Service Provider ("Service
        Provider Charges"). Tap A Tradie may charge you for certain products or
        services that are provided by Tap A Tradie ("Tap A Tradie Charges") (Tap
        A Tradie Charges and Service Provider Charges, collectively, "Charges").
        If Tap A Tradie books, manages and handles payment for services provided
        to you by a Service Provider through the Tap A Tradie Services program,
        the charges to you for those services will be deemed to be Tap A Tradie
        Charges. You will be informed of Charges before products or services are
        provided by Tap A Tradie or Service Providers, as the case may be
        (including, in the case of Tap A Tradie Charges, any cancellation fees
        and terms). Tap A Tradie may offer discounts on Tap A Tradie Charges
        from time to time in its sole discretion; to receive those discounts,
        you must comply with the terms and conditions Tap A Tradie specifies for
        the discount. You should confirm Charges each time you request or
        contract for products or services. Applicable sales tax will be added to
        all Charges where required by law.
        <br />
        <u>Payment.</u> <br />
        Payments for Tap A Tradie Charges are immediately due and payable to Tap
        A Tradie upon provision of the applicable Services, and are final and
        non-refundable except as set forth in the Terms (or, if applicable, the
        Tap A Tradie Guarantee). Payment terms for Service Provider Charges will
        be as agreed upon between you and the Service Provider. You acknowledge
        and agree that your purchases of services and products directly from a
        Service Provider are transactions between you and that Service Provider,
        and not with Tap A Tradie. When you use a credit card to pay for
        Charges, you represent and warrant that the credit card information you
        provide is accurate and that you are authorized to use it to pay the
        Charges. You agree not to initiate a chargeback with your credit card
        issuer unless and until you have exhausted all attempts to resolve any
        disputes directly with Tap A Tradie, and you understand that initiating
        a chargeback does not extinguish your obligation to pay.
        <h4></h4>
        <br />
        <br />
        <h4>Consent for Communications</h4>
        <br />
        &nbsp;
        <u>Telephone Calls and Other Communications.</u> <br />
        When you contact us, when we contact you, or when you communicate with a
        Service Provider or a User through the Services (including when we
        connect calls between Users and Service Providers), we may monitor
        and/or record those communications for quality assurance, customer
        satisfaction and other purposes. Calls between Service Providers and
        Users that originate with a partner service may also be monitored and
        recorded. You consent to this monitoring and recording.
        <br />
        <u>Your Consent to Receive Automated Calls/Texts.</u> <br />
        By providing your telephone number(s), you consent to receive
        autodialed, pre-recorded or artificial voice calls and text (SMS)
        messages:
        <ul>
          <li>
            if you are a User, by Tap A Tradie, Service Providers and other
            companies that help connect you to Service Providers about your
            project and other home-related services that may be of interest to
            you; and
          </li>
          <li>
            if you are a Service Provider, by Tap A Tradie and other companies
            that help connect you with Users.
          </li>
        </ul>
        Agreeing to receive marketing calls or text (SMS) messages is not a
        condition of purchasing any goods or services.
        <br />
        We may also contact you for servicing your account, addressing
        complaints, billing or other account-related matters, or other purposes
        reasonably related to the Services.
        <br />
        You agree that automated calls or text (SMS) messages may be made to
        your telephone number(s) even if your number(s) is registered on any
        state or federal Do Not Call list. You agree to be contacted at any
        email or mailing address or telephone number that you or anyone acting
        on your behalf provides to Tap A Tradie or that we obtain through other
        lawful means. For complete details on our use of your information,
        including Collected Information (as defined below), and how to opt out
        of receiving Tap A Tradie marketing communications, please see our
        Privacy Policy (located 
        <a href="https://tapatradie.com/#/privacy-policy">here</a>).
        <br />
        <br />
        <h4>Permissible Use</h4>
        <br />
        <br />
        <u>Grant of Limited License to Users.</u> <br />
        We hereby grant you, as a User, a limited, revocable, non-exclusive,
        non-transferable and non-sublicensable right to access and use the
        Services for your personal, non-commercial (unless otherwise agreed by
        us) and informational use only, subject to your compliance with the
        Terms. <br />
        <br />
        <u>Grant of Limited License to Service Providers.</u> <br />
        We hereby grant you, as a Service Provider acting in your professional
        capacity, a limited, revocable, non-exclusive, non-transferable and
        non-sublicensable right to access and use the Services for the purpose
        of providing information, products and services to Users as contemplated
        by the Services, subject to your compliance with the Terms. <br />
        <br />
        <u>The Services and Tap A Tradie’s Marks are Protected.</u> <br />
        The Services, including all materials, content and information therein
        and their selection, arrangement and composition, and all trademarks,
        service marks or other brands or names of Tap A Tradie (collectively,
        the "Content"), are the proprietary property of Tap A Tradie and its
        suppliers and licensors and are protected by Australia and international
        intellectual property laws, including trademark and copyright laws. You
        agree not to remove, alter or obscure any copyright, trademark or
        proprietary rights notice incorporated in the Content or accompanying
        the Services. Except for the limited license explicitly granted to you
        under the Terms, no other license is granted to you, whether by
        implication, estoppel or otherwise and all rights are explicitly
        reserved. <br />
        <br />
        <u>No Reverse Engineering.</u> <br />
        You may not reverse engineer, decompile, disassemble or otherwise
        attempt to derive the source code or architectural framework for the
        Services (except to the extent specifically permitted by applicable
        law). <br />
        <br />
        <u>No Automated Queries; No Harvesting.</u> <br />
        You may not access, download, monitor, or copy any Content contained on
        or in the Properties or otherwise in the Services through automated or
        artificial means (including screen and database scraping, spiders,
        robots, crawlers, deep-link, or any similar or equivalent automatic or
        manual process), or in any way obtain or attempt to obtain any Content
        through any means that Tap A Tradie does not intentionally make
        available through the Services. However, general purpose Internet search
        engines and non-commercial public archives that use tools to gather
        information for the sole purpose of displaying hyperlinks to the
        Services are granted a limited exception from the foregoing exclusion,
        provided that they do so from a stable IP address or range of IP
        addresses using an easily-identifiable agent that adheres to all
        limitations set forth in any applicable robots.txt file. You may not
        harvest information about Users or Service Providers for any purpose.
        <br />
        <br />
        <u>No Improper Uses.</u> <br />
        You may not frame any part of the Services. You may not use, or attempt
        to use, the Services through any means not explicitly and intentionally
        made available, provided or intended with respect to the Services
        (including attempting to gain unauthorized access to any portion of the
        Properties, the Services, or any other systems connected to the
        Properties and Services). You may not use or access the Properties or
        the Services in any manner that could damage, disable, overburden, or
        impair the Services or that could interfere with the rights of or
        otherwise harm Tap A Tradie, our service providers or suppliers, Service
        Providers, other Users or any other person. <br />
        <br />
        <u>No Objectionable Conduct.</u> <br />
        You agree that, in using the Services and interacting with Tap A Tradie,
        Service Providers and/or Users (as the case may be), you will not (i)
        engage in any form of harassment or offensive behaviour, including
        making abusive, threatening, defamatory, racist, obscene, or offensive
        statements; (ii) engage in deceptive or fraudulent behaviour; (iii)
        infringe or violate the privacy rights, property rights or any other
        rights of any person or entity; or (iv) violate any applicable law, rule
        or regulation. <br />
        <br />
        <h4>Account Information</h4>
        <br />
        <br />
        <u>Accurate Information.</u>
        <br />
        If you are a User, you will be asked to disclose certain information
        about yourself and your service requirements when you submit a request
        for Service Provider services and when you open or confirm your Tap A
        Tradie account. You agree to provide us with accurate, complete and up
        to date information and to keep it updated, complete and correct. You
        verify that you are the current subscriber or owner of any telephone
        number that you provide. You are strictly prohibited from providing a
        telephone number that is not your own. If we discover that any
        information provided in connection with your registration is false or no
        longer accurate, we may suspend or terminate your account at any time if
        you do not correct or update such information.
        <br />
        <br />
        <h4>User Submissions and Other Collected Information</h4>
        <br />
        <br />
        <u>Collected Data Definition.</u> <br />
        You agree and acknowledge that Tap A Tradie, Service Providers and Users
        may collect data, text, photos, videos, measurements, comments, reviews,
        feedback, notes, ideas, know-how, techniques, or other information
        (individually and collectively, "Information") before, during, and after
        the provision of Services, or otherwise in connection with the Services
        (individually and collectively, "Collected Information"). If you (or
        your agents or authorized representatives) order a Tap A Tradie product
        and provide your Information to be used in that product (for example, if
        your inspection data is provided to Tap A Tradie to create a Repair
        Estimate Report), then Collected Information includes the provided
        Information.
        <br />
        <br />
        <u>You Are Responsible for User Submissions.</u>
        <br />
        The Services may permit you and other Users and Service Providers to
        submit Information (individually and collectively, "User Submissions").
        The person submitting a User Submission, and not Tap A Tradie, is solely
        responsible for that person’s User Submission and the consequences of
        submitting it. By way of example and not limitation, if a Service
        Provider provides you with advice or other information, the Service
        Provider (and not Tap A Tradie) is solely responsible for that advice
        and information. You acknowledge and agree that Tap A Tradie has no
        obligation to pre-screen your or any other person’s User Submissions.{" "}
        <br />
        <br />
        Knowingly submitting false names or contact information, or not keeping
        your contact information updated, not only wastes everybody’s time, it
        could result in harm to consumers (including violations of privacy) and
        significant legal and regulatory liability, damages, penalties and costs
        for Tap A Tradie and our service providers and partners. 
        <strong>
          Accordingly, if you knowingly input false information in a service
          request, including any name, telephone number or other contact
          information that is not yours (whether it’s someone else’s or just
          made up), or if you fail to keep the information in your Tap A Tradie
          account current and correct, you agree to fully indemnify and be
          liable to Tap A Tradie and each Service Provider or other party who
          accepts that service request for any claims (including claims under
          the Federal Telephone Consumer Protection Act or its state law
          equivalents), losses, liabilities, damages (direct, punitive,
          consequential or other), fines, penalties, and costs and expenses
          (including reasonable attorneys’ fees) incurred by the affected
          parties in connection with the false or incorrect information. We have
          the exclusive right to choose counsel, at your expense, to defend any
          such claims.
        </strong>
        <br />
        <br />
        <u>Limited Disclosure of User Submissions.</u>
        <br />
        Tap A Tradie will not display the address of projects or precisely
        pinpoint the project location on a map to all Users. However, Tap A
        Tradie and its licensees may display the address and other User
        Submissions associated with a given project to a limited audience,
        including the homeowner of that address, Service Providers, and other
        third parties involved in the Services. You further acknowledge and
        agree that the description of the project for which you request Service
        Provider services, all information contained in any reviews of Service
        Providers that you submit and any photos that you upload may be viewed
        by the general public and will not be treated as proprietary or
        confidential. Please be careful what you post, to avoid inadvertently
        disclosing your address or any other personal information that you do
        not wish to be seen by the general public. <br />
        <br />
        <u>License to User Submissions.</u> <br />
        With respect to both User Submissions and Collected Information, you
        grant Tap A Tradie a worldwide, non-exclusive, royalty-free, fully paid,
        perpetual, irrevocable, and fully sub-licensable and transferable
        license to use, reproduce, distribute, prepare derivative works of,
        publish, broadcast, publicly perform and display, make, use, import,
        offer to sell, sell, and otherwise transfer and exploit all copyrights,
        inventions, and other intellectual property rights in the User
        Submissions and Collected Information in any form and any medium,
        subject to our obligations in the Privacy Policy relating to personal
        information. We will not pay you or otherwise compensate you for User
        Submissions or Collected Information. You represent that you are the
        exclusive owner of all rights in the User Submissions that you submit.
        <br />
        <br />
        <u>Do Not Post Illegal, Harmful, or Prohibited Content.</u> <br />
        You agree not to post, submit or link to any User Submissions or
        material that (i) is prohibited under the section above entitled
        Permissible Use/No Objectionable Conduct; (ii) directly or indirectly
        directs persons to another online or offline location that provides
        products or services similar to the Services; (iii) involves unsolicited
        or unauthorized advertising, promotional materials, junk mail, spam,
        chain letters, pyramid schemes, or any other form of solicitation; or
        (iv) facilitates gambling, gaming, raffles, lotteries, sweepstakes,
        and/or any other activity featuring the award of a prize. <br />
        <br />
        <u>Reviews of Pros.</u>
        <br />
        You may only post a review of a Service Provider if you have first-hand
        knowledge of the services provided by such Service Provider (that is,
        such Service Provider provided products or services to you). You may not
        accept anything of value from a Pro in exchange for posting a review.
        You may not post or submit a review of a Service Provider if you are (i)
        an employee, contractor, partner of, or otherwise affiliated with, such
        Service Provider, (ii) an employee, contractor, partner of, or otherwise
        affiliated with, a competitor of such Service Provider, or (iii) related
        to such Service Provider, including by blood, adoption or marriage. You
        agree that any review that you post or submit will be honest and
        factually accurate. <br />
        <br />
        <u>Review of User Submissions.</u> <br />
        We do not approve, control or endorse your or anyone else's User
        Submissions and have no obligation to do so. However, we reserve the
        right (but assume no obligation) to pre-screen, refuse, remove or modify
        User Submissions for any reason, at our sole discretion. <br />
        <br />
        <u>Suggestions.</u> <br />
        If you elect to provide or make available to Tap A Tradie any
        suggestions, comments, ideas, improvements or other feedback relating to
        the Services or otherwise (“Suggestions”), Tap A Tradie will be free to
        use, disclose, reproduce, have made, modify, license, transfer and
        otherwise utilize and distribute your Suggestions in any manner, without
        credit or compensation to you. <br />
        <br />
        <u>Accuracy of Information.</u>
        <br />
        Tap A Tradie makes no representation or warranty about the accuracy or
        suitability of the User Submissions or other information displayed on
        the Properties or provided through the Services. We use commercially
        reasonable efforts to promptly update any incorrect information
        displayed on the Properties, when we are notified or otherwise become
        aware of such inaccuracy. We do not have any obligation to contact you
        to update or correct any information previously accessed by or provided
        to you through the Services.
        <br />
        <br />
        <h4>Third-Party Intellectual Property</h4>
        <br />
        <br />
        <u>Third Party Materials and Intellectual Property.</u> <br />
        The Services may contain links to third party websites, advertisements,
        services, offers, activities or other content (collectively,
        "Third-Party Materials"), and Third-Party Materials may be provided on
        the Tap A Tradie Properties as part of the Services. These Third-Party
        Materials are not owned or controlled by Tap A Tradie. These Third-Party
        Materials are provided for your reference and convenience only, and do
        not imply any endorsement, sponsorship or recommendation by Tap A
        Tradie. All non-Tap A Tradie trademarks, product names and logos
        appearing on our Services are property of their respective owners.{" "}
        <br />
        <br />
        <u>Claims of Copyright Infringement.</u>
        <br />
        If you believe that your work has been reproduced in connection with the
        Services in a manner that constitutes copyright infringement, you may
        submit a notification pursuant to the Digital Millennium Copyright Act
        ("DMCA") by sending a written notification to Tap A Tradie at the
        address below, with the following information: (i) a physical or
        electronic signature of the person authorized to act on behalf of the
        owner of the copyright interest, (ii) identification of the copyrighted
        work claimed to have been infringed, (iii) a description of where the
        material that you claim is infringing is located within the Services,
        (iv) information reasonably sufficient to permit us to contact you, such
        as an address, telephone number, and, if available, an e-mail address,
        (v) a signed statement that you have a good faith belief that use of the
        material in the manner complained of is not authorized by the copyright
        owner, its agent, or the law, and (vi) a signed statement that the
        information in the notification is accurate, and under penalty of
        perjury, that you are the copyright owner or you are authorized to act
        on behalf of the owner.
        <h4>Notification pursuant to the DMCA should be submitted to:</h4>
        <br />
        <br />
        Tap A Tradie Pty Ltd
        <br />
        Attn: Tap A Tradie Legal Department
        <br />
        152 St Georges Tce
        <br />
        Perth, WA 6000
        <br />
        info@tapatradie.com
        <br />
        <br />
        <u>Returns; Refunds.</u> <br />
        In the limited cases where we allow the return of a Tap A Tradie
        Product, the purchase price will be credited to your Tap A Tradie
        account. No refunds will be given. <br />
        <br />
        If you are a User receiving services from a Service Provider, your
        rights will be governed by your contract with the Service Provider and
        by applicable federal, state and local laws. Tap A Tradie will not
        provide a refund for Service Provider work.
        <br />
        <br />
        Payments for Tap A Tradie Charges that meet our requirements for a
        refund rather than an account credit (as set forth in the Terms) will be
        refunded back to the original method of payment. If you paid with a
        credit card, we will make the refund only to the card you used for the
        payment, not another card. If the card used to make the payment is
        inactive or has been cancelled, the card issuer should apply the refund
        to your new card or send you a refund. Please contact your card issuer
        for more information.
        <br />
        <br />
        <u>No Interest.</u> <br />
        You acknowledge and agree that funds in your account within the Services
        will accrue no interest and you are entitled to no interest earned or
        otherwise resulting from balances in any accounts within the Services.{" "}
        <br />
        <br />
        <u>Inactive Accounts.</u>
        <br />
        If a User account remains inactive for one year or more, Tap A Tradie
        reserves the right to terminate the account, including any credits,
        incentives, rewards or the like associated with the account. <br />
        <br />
        <u>Modification of Services.</u> <br />
        We reserve the right to modify, restrict access to, or discontinue the
        Services (or any portion of the Services), temporarily or permanently,
        with or without notice to you, and we are not obligated to support or
        update the Services. Unless explicitly stated otherwise, any new
        features that augment or enhance the current Services shall be subject
        to these Terms.
        <br />
        <br />
        <u>Termination; No Right to Services.</u>
        <br />
        We reserve the right to refuse service to anyone. We reserve the right,
        with or without notice, and in our sole discretion, to terminate any
        license to the Services, in whole or in part, and to terminate, limit or
        prevent any User’s or Service Provider’s future access to and use of the
        Services, for any at any time and for any reason (including those
        specifically described in these Terms). <br />
        <br />
        <h3>
          <strong>Part 3: Additional Terms for Service Providers</strong>
        </h3>
        <br />
        <br />
        If you are a Service Provider, the terms in this Part 3 also apply to
        you.
        <br />
        <br />
        <h4>General Terms for All Service Providers</h4>
        <br />
        <br />
        <u>Licenses, Qualification and Insurance.</u> <br />
        If you solicit, accept or perform services through the Services, you
        agree that:
        <ul>
          <li>
            you will solicit, accept and perform work only if you possess the
            qualifications, experience and skill necessary to complete such
            work;
          </li>
          <li>
            you will have (and will continue to maintain) current valid
            licenses, authorizations, insurance and bonding required by all
            applicable authorities for any work you solicit, accept or perform;
            and
          </li>
          <li>
            to the extent professional liability insurance is required for the
            kind of work you are doing (e.g., under applicable laws, rules and
            regulations, as a requirement of taking certain projects from Tap A
            Tradie, or as requirement for participation in certain programs),
            you will obtain and maintain that insurance.
          </li>
        </ul>
        <br />
        <u>Performance of Services.</u>
        <br />
        You agree that, in performing work that you received through the
        Services:
        <ul>
          <li>
            if you receive a User request for a Service Provider to provide
            services, you will respond to the User (or Tap A Tradie, in the case
            of services booked and scheduled by Tap A Tradie) as soon as
            possible but in any event within 24 hours. If you do not timely
            respond, Tap A Tradie reserves the right to send that project
            request to another Service Provider and to terminate your right to
            respond to it;
          </li>
          <li>
            you will complete the work in a professional manner, with the degree
            of skill and care that is required by best industry standards;
          </li>
          <li>
            you will complete the work in a timely manner (including, if
            applicable, within any specified time/schedule/completion
            requirements provided by Tap A Tradie for the particular job);
          </li>
          <li>
            you will comply with all applicable laws, rules and regulations;
          </li>
          <li>
            you will not engage in any acts of wrongdoing, dishonesty or
            unethical business practices, including bait and switch tactics,
            misleading advertising or claims, or calling or continuing to call a
            User who has requested not to be called;
          </li>
          <li>
            you will not engage in spoofing or any other false identification,
            whether by telephone, text (SMS), email or other means;
          </li>
          <li>
            you will not make any representations, promises, guarantees or
            warranties on behalf of Tap A Tradie, except for the specific terms
            of the Tap A Tradie Guarantee (located 
            <a href="https://porch.com/guarantee">here</a>);
          </li>
          <li>
            if you are doing the work through the Tap A Tradie Services program
            in which Tap A Tradie books, schedules and processes payment for
            your work, you will not accept payment for your work directly from
            the User or solicit additional work directly from the User; and
          </li>
          <li>
            you will not subcontract your work except with our prior, express
            written approval.
          </li>
        </ul>
        If you subcontract any of the work, it is your responsibility to ensure
        that your subcontractors meet all of the requirements of the Terms
        applicable to Service Providers, including those relating to
        qualifications, licenses, insurance, data use and security, and
        compliance with applicable law. Any action or omission by your
        subcontractor that would be a breach if done by you will be deemed to be
        a breach of the Terms by you.
        <br />
        <br />
        <u>User Information.</u> <br />
        Tap A Tradie may provide you with personal information relating to Users
        that are seeking products or services. You agree that:
        <ul>
          <li>
            you will not use such personal information except as required to
            provide your products or services to such individual;
          </li>
          <li>
            you will not disclose, rent, sell or otherwise provide this
            information to others without Tap A Tradie’s and such individual’s
            consent (and, if Tap A Tradie so notifies you with respect to your
            participation in certain programs, the consent of the third party
            that referred the individual to Tap A Tradie);
          </li>
          <li>
            you will not use this information to market your products or
            services (or those of any third party) to such individual, unless
            Tap A Tradie notifies you that such marketing is permitted in
            connection with your participation in certain programs;
          </li>
          <li>
            you will not use, or attempt to use, this information in a manner
            that would violate the Terms or for any purpose not intended by Tap
            A Tradie;
          </li>
          <li>
            you will take reasonable and appropriate administrative, physical
            and technical measures to protect the security, integrity and
            confidentiality of User information that you receive from Tap A
            Tradie; and you will promptly report all data breaches or other
            information security events involving User information to Tap A
            Tradie;
          </li>
          <li>
            if your account with Tap A Tradie is no longer active or is
            terminated, you will not represent that you provide services through
            any Tap A Tradie program or network; and
          </li>
          <li>
            you will not represent that you are an employee or agent of Tap A
            Tradie. Even if you are participating in our Tap A Tradie Services
            program where Tap A Tradie books, manages and processes payment for
            your work, you are not an employee or agent of Tap A Tradie and you,
            not Tap A Tradie, are responsible for your work.
          </li>
        </ul>
        <br />
        <br />
        <u>Encumbrances.</u> <br />
        You agree that, except to the extent specifically permitted by the terms
        of a written agreement between you and a User with respect to a project,
        you will not file or record any lien, claim of lien, stop payment
        notice, stop notice, security interest, or other encumbrance
        (“Encumbrance”) on the property of any User or Tap A Tradie; and if you
        become aware of an Encumbrance related to your work for a User that is
        not expressly permitted by your agreement with that User, you will cause
        the release, dissolution, cancelation or removal of that Encumbrance
        within 5 business days, irrespective of its validity. We have the right,
        but not the obligation, to take any and all steps necessary to promptly
        release any impermissible Encumbrances. You must reimburse Tap A Tradie
        or the User (as the case may be) all costs and expenses, including but
        not limited to legal fees, incurred by us or the User as a result of any
        impermissible Encumbrances. <br />
        <br />
        <u>Disputes with Users.</u> <br />
        You agree that you will cooperate with Tap A Tradie if we attempt to
        facilitate the resolution of any customer dispute or complaint between
        you and a User to whom you provide (or have been booked to provide)
        product, services or advice. However, we will not be liable to you, the
        User or any other person for the resolution of (or failure to resolve)
        any such matter. We reserve the right to charge you for any amounts we
        pay to a User in connection with any such dispute or complaint,
        including disputes regarding your performance of or failure to perform
        services, and you agree to reimburse Tap A Tradie for any such payments
        and for any costs, expenses or attorneys’ fees that we incur in
        connection with such dispute. <br />
        <br />
        You agree that Tap A Tradie has the right to disclose any information we
        have regarding you to any authorities requesting information from us
        regarding any product, services or advice you have provided or proposed
        to provide or any Services we have provided to you.
        <br />
        <br />
        <u>Informational Requests; Updates.</u> <br />
        You agree to comply with Tap A Tradie's informational requests from time
        to time in connection with the Services, including providing information
        to be used by Tap A Tradie (or our service providers) to perform
        background checks, credit checks, evaluations of reputation and
        character and other assessments, and to confirm status if we have
        connected you with a User. You agree to immediately notify us if: (i)
        any information you have provided to Tap A Tradie, or any relevant
        information about you, has changed, (ii) a User has notified you that
        they have a complaint with you or any products or services provided by
        you, (iii) you have received notice of any complaint, investigation,
        fine or adverse action taken by a governmental authority with respect to
        your professional license or your products or services, or (iv) you have
        been notified of any termination, suspension, or lapse of any
        professional license, insurance or bonding. <br />
        <br />
        <u>Taxes.</u> <br />
        You agree to properly register to collect sales, use, excise and other
        taxes, duties, and other governmental assessments in connection with
        your products or services ("Taxes"), and to collect and timely remit
        such Taxes to the applicable tax authorities. You acknowledge and agree
        that you are responsible for collecting, withholding, remitting and
        reporting all applicable Taxes on the provision of your products or
        services to Users, except for those Taxes or tax-related payments that
        Tap A Tradie is required by law to collect or withhold. You agree that
        you, and not Tap A Tradie, are solely responsible for all matters
        related to Taxes. You agree to provide a current and correct W-9 to Tap
        A Tradie upon request. <br />
        <br />
        <u>Site Link; Reviews.</u> <br />
        If you have a Tap A Tradie profile on the Properties, you agree to link
        your website to your Tap A Tradie profile, at a place on your website
        determined by you, using the following text: "Review my projects and
        endorsements on Tap A Tradie.” When you include the contact information
        of a past customer in your project information that you submit to Tap A
        Tradie, you agree that we may reach out to that person asking for
        reviews and recommendations of you and inviting them to create an
        account on Tap A Tradie. <br />
        <br />
        <u>Quality Control.</u>
        <br />
        We may access and monitor your Tap A Tradie account and usage and
        communication information and may monitor, review and use such account
        and usage and communication information as they deem appropriate,
        including as reasonably needed to confirm status of project requests
        when we have connected you with a User, to investigate complaints or
        billing issues, to provide services to you, and to verify information
        you or Users have provided. <br />
        <br />
        <u>Pro Account; Profile.</u> <br />
        You will be asked to open an account and may be asked to complete a
        profile in connection with the Services. You agree to promptly complete
        your profile and to provide us with such additional information as we
        reasonably request; to provide accurate, complete and up to date
        information in connection with the Services; and keep that information
        updated, complete and correct. <br />
        <br />
        You understand and acknowledge that the amount and quality of your
        information (including the amount and quality of profile data, project
        activity and endorsements) will affect your exposure within the
        Services.
        <br />
        <br />
        You agree that Tap A Tradie may suspend or terminate your Tap A Tradie
        account if it remains inactive for 60 days or more, or if you fail to
        respond to Tap A Tradie’s active communications for 30 days or more.
        <br />
        <br />
        <u>Phone Number; Communications.</u> <br />
        You are aware and agree that the telephone number listed by Tap A Tradie
        for your business in connection with the Services may be a call
        forwarding number used by Tap A Tradie that is different than your
        personal or business telephone number. This number is utilized by Tap A
        Tradie to improve its products and services for both Users and Service
        Providers, for quality control and for other purposes (such as those
        described above). We (and, if the call to you originates on a partner
        service, the partner) may monitor and/or record calls on this number and
        other communications with Users that you make through the Services. You
        consent to this monitoring and recording.
        <br />
        <br />
        <u>Confidentiality.</u> <br />
        If you receive confidential information from Tap A Tradie, until such
        information is no longer confidential, you agree not to use it or
        disclose it to any third party except as necessary to perform your
        obligations contemplated by our relationship. Confidential information
        includes but is not limited to information concerning Tap A Tradie’s
        fees, marketing plans, financial results, pricing schedules, product
        lines, product plans, proprietary technology, research information,
        policies and practices, trade secrets, and any and all other information
        that is not generally known to the public. <br />
        <br />
        <u>Independent Contractor.</u> <br />
        You acknowledge that you are an independent contractor and no agency,
        partnership, joint venture or employee-employer relationship with Tap A
        Tradie is intended or created by the Terms or any relationship between
        us, that you have no power or authority to make any commitments on
        behalf of Tap A Tradie, and that Tap A Tradie has no power or authority
        to make any commitments on your behalf. You are solely responsible for
        the supervision, direction and control, compensation, benefits and
        withholdings of all of your personnel.
        <br />
        <br />
        <u>Additional Program Terms for Certain Service Providers.</u> <br />
        Service Providers participating in certain programs, such as Service
        Providers who participate in our Tap A Tradie Services program where Tap
        A Tradie books, manages, and processes payment for their work on behalf
        of Users and Service Providers who provide services to Users referred to
        Tap A Tradie by certain third parties, may be subject to Additional
        Program Terms that may be additional to or different from those herein.
        If you participate in one of these programs, you will be required to
        agree to the Additional Program Terms provided to you. In the event of
        any conflict between the Additional Program Terms and these terms of
        use, the Additional Program Terms will govern. <br />
        <br />
        <u>No Guarantee.</u> <br />
        As a Service Provider, you agree and acknowledge that Tap A Tradie
        cannot and does not guarantee the results of any Services provided by
        Tap A Tradie, including the exposure you will receive as part of the
        Services, the number or quality of potential customers with whom you
        will have contact, or whether a homeowner will actually contract with
        you to do the work if you respond to their project request. You
        acknowledge that Tap A Tradie will determine in its sole discretion the
        manner and terms of Services provided to Service Providers. By way of
        example and not limitation, Tap A Tradie may impose limits on the type
        and/or number of Service Providers that can participate in particular
        programs, which Pros are notified about particular project requests and
        the timing of such notification, the type and/or number of Services
        Providers who can respond to particular project requests, and the amount
        and availability of discounts for particular programs, services or
        Service Providers. <br />
        <br />
        <u>Offset of Amounts Due.</u> <br />
        You agree that if Tap A Tradie is entitled under the Terms to payment by
        you or reimbursement from you of any costs, expenses or other amounts,
        we may deduct any such amounts from any amount that we owe you. <br />
        <br />
        <u>Fraud or Other Wilful Misconduct.</u> <br />
        Notwithstanding anything else herein to the contrary, you understand
        that, in the event of wilful misconduct by you against Tap A Tradie or
        any Tap A Tradie homeowner, customer or other User of any Tap A Tradie
        Services, including but not limited to fraud, theft, failure to perform
        services for which you received any deposit or payment, or wilful damage
        to property, Tap A Tradie shall assess against you, in addition to all
        other fees, damages and penalties to which it may be entitled, a fee
        equal to three times the dollar amount or value of such fraud, theft,
        retention of unearned payments, wilful damage or other wilful
        misconduct. This fee shall constitute liquidated damages to compensate
        Tap A Tradie for the time and effort of Tap A Tradie’s employees,
        agents, representatives and attorneys in addressing, investigating, and
        rectifying your misconduct, and you hereby agree that such fee is
        reasonable and appropriate. <br />
        <br />
        <strong>
          Further, Tap A Tradie reserves the right to pursue legal action
          against you through the state and federal courts of Western Australia
          or other appropriate jurisdiction in the event Tap A Tradie determines
          you have committed fraud, theft, wilful failure to perform services
          for which you have received a deposit or payment, or wilful damage to
          property to, against or involving Tap A Tradie or any User. You agree
          and consent to the personal jurisdiction and venue of the federal and
          state courts in Perth, Western Australia, for any such court action or
          proceeding.
        </strong>
        <br />
        <br />
        <h4>Products and Services for Pros</h4>
        <br />
        <br />
        If you are a Service Provider handling projects directly with homeowners
        through the Tap A Tradie Professional Network (a “Pro”), the terms in
        this section also apply to you. (Note that while the Pro Products
        described below are available to all Service Providers, if you
        participate in our Tap A Tradie Services program where Tap A Tradie
        books, manages and schedules your work, the specific Additional Program
        Terms for that program will apply.)
        <br />
        <br />
        Pros can purchase the right to contact homeowners who have requested
        that a Pro contact them for a particular project (a “project request”).
        Information regarding a project request, and the right to respond to it,
        may be made available to a Pro through email, through a telephonic
        connection, through Tap A Tradie’s communications platform, or by other
        means. The right to respond to project requests can be purchased through
        subscription Services that have a recurring financial obligation every
        month (or other time period) (“Subscription Products”) or that have a
        financial obligation for each project request response or other product
        that a Pro buys (“Pay As You Go Products”). Subscription Products and
        Pay As You Go Products are collectively referred to as “Pro Products.”
        <br />
        <br />
        <u>Product Terms.</u> <br />
        Tap A Tradie and you may agree to the term, fees and other terms of a
        Pro Product (including the fees and terms applicable to individual or
        categories of project requests) ("Product Terms") in writing,
        telephonically or electronically, including by email or within Tap A
        Tradie’s communication platform. If you purchase a Pro Product, Tap A
        Tradie will send an email detailing the terms of the Pro Product that
        you agreed to ("Confirmation Email"). If you disagree with the purchase
        information and other terms in the Confirmation Email, you have three
        days after delivery of the Confirmation Email to contact Tap A Tradie at
        info@tapatradie.com with a request to cancel your purchase of the Pro
        Product and receive a refund. If you do not notify us of your
        disagreement and cancel your purchase within those three days, you will
        be deemed to have accepted the terms set forth in the Confirmation
        Email, in addition to the Terms. Note that this paragraph does not apply
        to the rejection or return of individual project requests, which is
        described in the next paragraph. <br />
        <br />
        <u>Returns.</u> <br />
        Once you purchase the right to respond to a particular project request
        (whether you purchase it as a Pay As You Go Product or as part of a
        Subscription Product), you are generally not able to reject or return
        it. Please note that you are purchasing the right to contact the
        homeowner with respect to their project request; you are not purchasing
        any right or guarantee to perform the work. (It is the homeowner who
        decides whether to work with a particular Pro or not.) We allow returns
        only in limited cases where the project request is invalid (for example,
        if the project request includes a disconnected telephone number or has
        an obviously fraudulent name, or if the homeowner did not actually
        request to be contacted) or is a duplicate of another project request
        you recently purchased from Tap A Tradie. If your return request meets
        Tap A Tradie’s return criteria, then the purchase price for the
        applicable project request will be credited to your account. No refunds
        will be given. <br />
        <br />
        <u>Suspension; Termination.</u> <br />
        Tap A Tradie reserves the right to suspend or terminate any Pro’s
        ability to purchase Pro Products or otherwise use the Pro Products and
        any other Services, including as a result of default in payment
        obligations. Our general practice is to stop sending project requests 7
        days after a Pro’s account becomes delinquent, and to suspend a Pro’s
        account after 14 days of delinquency. <br />
        <br />
        <h4>
          <strong>Subscription Products for Pros</strong>
        </h4>
        <br />
        <br />
        <u>Term.</u> <br />
        The "Initial Term" of a Subscription Product begins on the first day the
        Subscription Product is made available to a Pro and continues for the
        length of time specified in the Confirmation Email unless earlier
        terminated in accordance with the Terms. 
        <strong>
          After the Initial Term, if a Subscription Product has not been
          terminated, it will automatically renew for successive Renewal Terms
          (as defined below) until terminated by Tap A Tradie or the Pro in
          accordance with the Terms.
        </strong>
         A "Renewal Term" is a length of time specified in the Confirmation
        Email. For example, if the Confirmation Email specifies a monthly
        billing period, then the Renewal Terms are one month each, with the
        Subscription Product automatically renewing for additional one-month
        billing cycles until terminated in accordance with the Terms.
        Termination of the Initial Term or the then-current Renewal Term may
        only be done in accordance with the termination procedure described
        below. <br />
        <br />
        <u>Payment.</u> <br />
        If you purchase a Subscription Product as a Pro, you authorize Tap A
        Tradie to bill your credit card in the amounts and on the schedule
        specified in the Confirmation Email, on the applicable billing dates.{" "}
        <br />
        <br />
        You agree to notify Tap A Tradie of any changes to your credit card
        information necessary to process your payment. If Tap A Tradie is unable
        to process the payment, you will be responsible for making an alternate
        payment arrangement and any resulting processing fees that may be
        incurred, plus late fees as described below. Any prepaid amounts are not
        refundable, except as specifically described in the Terms.
        <br />
        <br />
        For some Subscription Products, we will automatically deduct from your
        Tap A Tradie account balance the cost of responding to particular
        project requests. The cost to respond to a project request varies
        depending on service type and other factors, and may be adjusted from
        time to time by Tap A Tradie in its sole discretion. To purchase the
        right to respond to a particular project request, you must have a
        sufficient balance in your Tap A Tradie account. Depending on the type
        of Subscription Product, the number of opportunities available to
        respond to a particular project request may be limited.
        <br />
        <br />
        <u>Late Fees and Billing Issues.</u> <br />
        You agree to pay a late fee of $20 for each late payment. You also agree
        to pay reasonable expenses (including collection agency fees and
        attorneys’ fees) incurred by Tap A Tradie in collecting any overdue
        amounts. You agree to notify Tap A Tradie of any billing discrepancies
        or issues within 20 days after they first appear, and if you do not, you
        agree that you have waived the right to dispute such billing
        discrepancies or issues. <br />
        <br />
        <u>Termination.</u> <br />
        To terminate a Subscription Product, you must notify Tap A Tradie at
        least 15 days (or in the case of Subscription Products billed weekly or
        monthly, at least 7 days) prior to the last day of the Initial Term or
        the last day of the then-current Renewal Term (as the case may be) by
        contacting us at info@tapatradie.com with a request to terminate such
        Subscription Product. The effective date of termination will be the last
        day of the Initial Term or then current Renewal Term (as applicable) and
        not before such date. <br />
        <br />
        Tap A Tradie may terminate a Subscription Product immediately by
        providing written notice to you (either by email or letter). If Tap A
        Tradie terminates your Subscription Product as a result of your material
        breach of the Terms, you will not be entitled to a refund of any
        previously paid amount. If Tap A Tradie’s termination is for
        convenience, you will receive a pro rata refund of any prepaid but
        unused fees applicable to the remaining portion of the Initial Term or
        the then-current Renewal Term (as the case may be) for the terminated
        Subscription Product.
        <br />
        <br />
        <strong>Pay As You Go for Pros</strong>
        <br />
        <br />
        With Pay as You Go Products, when Tap A Tradie notifies you about a
        particular project request, you can choose at that time whether to buy
        the right to respond to that homeowner. The cost to respond to a project
        request varies depending on service type and other factors, and may be
        adjusted from time to time by Tap A Tradie in its sole discretion. To
        respond to a particular project request, you must have a sufficient
        balance in your Tap A Tradie account; if not, you can add funds by
        credit card. The number of opportunities available to respond to a
        particular project request is limited, and these opportunities are
        allocated to Pros on a first-come, first-served basis. Once you respond
        to a project request and pay the applicable purchase price, Tap A Tradie
        will provide you with contact information for, or other means of
        contacting, the homeowner.
        <br />
        <br />
        <h3>
          <strong>Part 4: Additional Important Legal Terms</strong>
        </h3>
        <br />
        <br />
        <h4>Warranty Disclaimer</h4>
        <br />
        <br />
        <strong>
          The Services are provided on an "as is" basis without warranties of
          any kind, either express or implied. To the fullest extent permitted
          by law, the Tap A Tradie Parties disclaim all warranties, express,
          implied, statutory, and otherwise, in connection with the Services and
          your use of or transactions with Tap A Tradie, Users, Service
          Providers or other third parties, including any implied warranties of
          title, merchantability, fitness for a particular purpose, satisfactory
          quality, security, accuracy, availability, use of reasonable care and
          skill, and non-infringement, as well as warranties arising by usage of
          trade, course of dealing, and course of performance.
        </strong>
        <br />
        <br />
        <h4>Limitation of Liability</h4>
        <br />
        <br />
        <strong>
          In no event will the Tap A Tradie Parties be liable to you or any
          third party for any cost of cover, lost profits or direct, indirect,
          incidental, special, punitive, or consequential damages whatsoever
          arising out of, based on, or resulting from your use of the Services
          and your use of, or transactions with, Tap A Tradie, Users, Service
          Providers or other third parties, whether based on warranty, contract,
          tort, negligence or any other legal theory, whether or not such
          damages are foreseeable and whether or not Tap A Tradie is advised of
          the possibility of such damages. The foregoing limitation of liability
          shall apply to the fullest extent permitted by law in the applicable
          jurisdiction.
        </strong>
        <br />
        <br />
        <strong>
          In no event will the collective liability of the Tap A Tradie Parties
          arising out of or in connection with the Terms, the Services, and your
          use of, or transactions with, Tap A Tradie, Users, Service Providers
          or other third parties exceed the lesser of (a) the amount you have
          paid to Tap A Tradie for use of the applicable Services in the
          preceding 12-month period or (b) if you have not had any payment
          obligations to Tap A Tradie, one hundred dollars (if you are a User)
          or one thousand dollars (if you are a Service Provider).
        </strong>
        <br />
        <br />
        <strong>
          Any claims relating to the Services or the Terms must be brought
          within one (1) year from the date the cause of action arose. Claims
          brought after such period will be VOID.
        </strong>
        <br />
        <br />
        <h4>Indemnification</h4>
        <br />
        <br />
        <strong>
          In addition to your indemnification obligations with respect to false
          or incorrect information (described above), you agree to indemnify,
          defend and hold harmless the Tap A Tradie Parties from and against any
          claims, disputes, demands, losses, obligations, liabilities, expenses,
          damages and costs (including attorneys’ fees) due to or arising out of
          (2) your transactions with Users, Service Providers or other third
          parties, or (3) any violation by you of any of the Terms or applicable
          laws. Tap A Tradie reserves the right, at its own cost and sole
          discretion, to assume the exclusive defence and control of any matter
          otherwise subject to indemnification by you, in which event you will
          fully cooperate with Tap A Tradie in asserting any available defences.
        </strong>
        <br />
        <br />
        <h4>Release</h4>
        <br />
        <br />
        <strong>
          You agree that you bear all risk and, in consideration of the services
          provided by Tap A Tradie, you hereby release Tap A Tradie, its
          affiliates, and their respective officers, directors, employees,
          contractors, shareholders, agents, representatives, licensors,
          licensees and suppliers (collectively, the "Tap A Tradie Parties")
          from all claims, demands, liabilities and damages (actual and
          consequential) of every kind and nature, known and unknown, suspected
          and unsuspected, disclosed and undisclosed, now and in the future,
          arising out of or in any way connected with your use of the Services
          and your use of, or transactions with, Tap A Tradie, Users, Service
          Providers or other third parties (including any claims under the
          federal Telephone Consumer Protection Act, Truth In Caller ID Act or
          Telemarketing Sales Rule and any state equivalents, and any federal or
          state tort or consumer protection laws). You further waive any and all
          rights and benefits otherwise conferred by any statutory or
          non-statutory law of any jurisdiction that would purport to limit the
          scope of a release or waiver. You waive and relinquish all rights and
          benefits which you have or may have under Section 1542 of the civil
          code of the state of California or any similar provision of the
          statutory or non-statutory law of any other jurisdiction to the full
          extent that you may lawfully waive all such rights and benefits.
        </strong>
        <br />
        <br />
        <h4>Disputes</h4>
        <br />
        <br />
        <strong>
          <u>Binding Arbitration.</u>
        </strong>
        <strong>
           <br />
          <br />
          You agree that any dispute or claim arising out of or relating in any
          way to the Terms, your access to or use of the Services or the
          Properties or any relationship between us, including the validity,
          applicability or interpretation of the Terms (any of these, a
          “Dispute”) will be resolved by binding arbitration rather than in
          court. There is no judge or jury in arbitration, and court review of
          an arbitration award is limited.
        </strong>
        <br />
        <br />
        The arbitration will be conducted by the American Arbitration
        Association (AAA) under its then-applicable rules, including (as
        appropriate) its Supplementary Procedures for Consumer-Related Disputes.
        The AAA's rules are available at http://www.adr.org/. Payment of all
        filing, administration and arbitrator fees will be governed by the AAA’s
        rules. The arbitration shall be conducted in the English language by a
        single independent and neutral arbitrator. For any hearing conducted in
        person as part of the arbitration, you agree that the hearing will be
        conducted in Perth, Western Australia or the city within Australia in
        which you reside. Without limiting the jurisdiction of any other court,
        you admit and further irrevocably agree to submit to the personal
        jurisdiction of the courts located within Perth, Western Australia for
        the purpose of entering judgments on arbitral awards.
        <br />
        <br />
        <strong>
          <u>Class Action Waiver.</u>
        </strong>
        <strong>
           <br />
          Any Dispute will be conducted only on an individual basis and not in a
          class, consolidated or representative action or arbitration or as a
          named or unnamed member in a class, consolidated, representative or
          private attorney general legal action. Your access and continued use
          of the Properties and/or the Services signifies your explicit consent
          to this waiver.
        </strong>
        <br />
        <br />
        <u>Venue.</u> <br />
        If for any reason a claim proceeds in court rather than in arbitration,
        we each waive any right to a jury trial and agree that such claim shall
        be brought only in courts of competent jurisdiction located in Perth,
        Western Australia, You hereby submit to the personal jurisdiction and
        venue of such courts and waive any objection on the grounds of venue,
        forum non conveniens or any similar grounds with respect to any such
        proceeding. <br />
        <br />
        Notwithstanding anything to the contrary, you and Tap A Tradie may seek
        injunctive relief and any other equitable remedies from any court of
        competent jurisdiction to protect intellectual property rights, whether
        in aid of, pending or independently of the resolution of any Dispute
        pursuant to the arbitration procedures set forth above.
        <br />
        <br />
        <u>Governing Law.</u> <br />
        You agree that the Terms and any Dispute will be governed solely by
        Australia and Western Australian state law, without regard to conflict
        of law provisions. <br />
        <br />
        A User’s rights under an agreement with a Service Provider will be
        governed by the terms of that agreement and by applicable federal,
        state, and local laws.
        <br />
        <br />
        <u>Attorneys’ Fees.</u> <br />
        If any of the Tap A Tradie Parties take legal action against you as a
        result of your violation of these Terms, the Tap A Tradie Parties will
        be entitled to recover from you, and you agree to pay, all reasonable
        attorneys' fees and costs of such action, in addition to any other
        relief granted to the Tap A Tradie Parties.
        <br />
        <br />
        <h3>General</h3>
        <br />
        <br />
        <u>Construction.</u> <br />
        All references to “dollars” or “$” in the Terms or on the Properties
        refer to Australian dollars. Unless otherwise indicated, the words
        “include,” “includes” and “including,” when used in the Terms, shall be
        deemed in each case to be followed by the words “without limitation.”{" "}
        <br />
        <br />
        <u>Assignment.</u> <br />
        The Terms, and any rights and licenses granted hereunder, may be
        transferred or assigned by you only with Tap A Tradie's prior written
        consent, but may be assigned by Tap A Tradie without restriction and
        without notice to you. <br />
        <br />
        <u>Entire Agreement and Severability.</u> <br />
        The Terms (which, as noted above, include any applicable Additional
        Program Terms) constitute the entire agreement between you and Tap A
        Tradie concerning the Services and supersede all prior or
        contemporaneous communications of any kind between you and Tap A Tradie
        with respect to the Services. If any provision of these Terms is held by
        a court or other tribunal of competent jurisdiction to be invalid, void,
        or unenforceable, such provision shall be limited or eliminated to the
        minimum extent necessary and replaced with a valid provision that best
        embodies the intent of these Terms, and the remainder of these Terms
        shall remain in full force and effect. <br />
        <br />
        <u>Waiver.</u> <br />
        No waiver of any provision of these Terms shall be deemed a further or
        continuing waiver of such term or any other term, and Tap A Tradie's
        failure to assert any right or provision under these Terms shall not
        constitute a waiver of such right or provision. <br />
        <br />
        <u>Third Party Beneficiaries.</u> <br />
        Nothing in the Terms create any right of action on the part of any third
        party, except (i) for the Tap A Tradie Parties and suppliers or others
        who are party to written agreements with us explicitly giving them third
        party beneficiary rights and (ii) as expressly provided in the
        applicable Additional Program Terms.
        <br />
        <br />
        <u>Export Control.</u> <br />
        Software and the transmission of applicable technical data, if any, in
        connection with the Services may be subject to export controls. You
        agree to comply with all applicable laws regarding software and the
        transmission of technical data exported from the Australia or the
        country in which you reside. <br />
        <br />
        <u>Contact Us.</u> If you have questions about these Terms, please
        contact us by email at info@tapatradie.com or in writing at 152 St
        Georges Tce, Perth WA 6000.
        <br />
        &nbsp;
      </section>
      {/* <!-- Are you a Professional Tradie? --> */}
      {/* {userData.access === "provider" ? (
        ""
      ) : ( */}
        <section className="section section--left">
          <div className="professional-tradie">
            <div className="professional-tradie__description">
              <h3 className="professional-tradie__title">
                Are you a Professional Tradie?
              </h3>
              <p>
                If you would like to be part of our Tradie community and are
                ready to meet new clients today please continue so we can
                welcome you onboard.
              </p>
              <Link to="/about-us" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="professional-tradie__image">
              <img src={terms_conditions_1} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      {/* <Footer /> */}
    </div>
  );
};

export default TermsAndConditionApp;
