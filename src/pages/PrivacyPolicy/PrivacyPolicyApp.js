import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import privacy_policy_1 from "../../assets/images/professional-tradie.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivacyPolicyApp = () => {
  const { userData } = useSelector((state) => state.directory);
  return (
    <div>
      {/* <Header /> */}

      {/* <!-- Privacy Policy --> */}
      <section className="section-top">
        <h2 className="section-top__title">
          Privacy <span>Policy</span>
        </h2>
      </section>

      <section className="section section--page page">
        {/* <!--<ol>
				<li>
					<p><strong>Privacy</strong></p>
					<ol>
						<li>
							The Company maintains the Privacy Policy in compliance with the provisions of the Privacy Act for data
							that it collects about the User and other customers. ;
						</li>
						<li>
							The Privacy Policy does not apply to how a Tradesperson handles personal information. ; If necessary under
							the Privacy Act, it is the Tradesperson’s responsibility to meet the obligations of the Privacy Act by
							implementing a privacy policy in accordance with law.
						</li>
						<li>
							Tap A Tradie Worldwide may use cookies (a small electronic trackingcode) to improve a User’s experience
							while browsing, while also sending browsing information back to the Company. The User may manage how it
							handlescookies in its own browser settings.
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Data</strong></p>
					<ol>
						<li>
							<strong>Security.</strong> The Company takes the security of Tap A Tradie Worldwide and the privacy of its
							Users very seriously. The Customer agrees that the Customer shall not do anything to prejudice the
							security or privacy of the Company’s systems or the information on them.
						</li>
						<li>
							<strong>Transmission.</strong> The Company shall do all things reasonable to ensure that the transmission
							of data occurs according to accepted industry standards. It is up to the Customer to ensure that any
							transmission standards meet the Customer’s operating and legal requirements.
						</li>
						<li>
							<strong>Storage.</strong> Data that is stored by the Company shall be stored according to accepted
							industry standards.
						</li>
						<li>
							<strong>Backup. </strong>The Company shall perform backups of its entire systems in as reasonable manner
							at such times and intervals as is reasonable for its business purposes. The Company does not warrant that
							it is able to backup or recover specific Customer Data from any period of time unless so stated in writing
							by the Company.
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Intellectual Property</strong></p>
					<ol>
						<li>
							<strong>Trademarks.</strong> The Company has moral &amp; registered rights in its trade marks and the User
							shall not copy, alter, use or otherwise deal in the marks without the prior written consent of the
							Company.
						</li>
						<li>
							<strong>Proprietary Information.</strong> The Company may use software and other proprietary systems and
							Intellectual Property for which the Company has appropriate authority to use, and the User agrees that
							such is protected by copyright, trademarks, patents, proprietary ; ; ;rights and other laws, both
							domestically and internationally. ; The User warrants that it shall not infringe on any third-party rights
							; ; ;through the use of Tap A Tradie Worldwide.
						</li>
						<li>
							<p>
								<strong>The Tap A Tradie Worldwide Application. ;</strong>The User agrees and accepts that Tap A Tradie
								is the Intellectual Property of the Company and the User further warrants that by using Tap A Tradie the
								User will not:
							</p>
							<ol>
								<li>
									Copy Tap A Tradie Worldwide or the services that it provides for the User’s own commercial purposes;
									and ;
								</li>
								<li>
									Directly or indirectly copy, recreate, decompile, reverse engineer or otherwise obtain, modify or use
									any source or object code, architecture, algorithms contained in Tap A Tradie Worldwide or any
									documentation associated with it. ;
								</li>
							</ol>
						</li>
						<li>
							<strong>Content.</strong> All content submitted to the Company, whether via Tap A Tradie Worldwide or
							directly by other means, becomes and remains the Intellectual Property of the Company, including (without
							limitation) any source code, analytics, insights, ideas, enhancements, feature requests, suggestions or
							other information provided by the User or any other party with respect to Tap A Tradie Worldwide. ;
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Disclaimer of Third Party Services &amp; Information</strong></p>
					<ol>
						<li>
							<p>
								The User acknowledges that Tap A Tradie Worldwide Is dependent on third-party services, including but
								not limited to:
							</p>
							<ol>
								<li>Banks, credit card providers and merchant gateway providers;</li>
								<li>Telecommunications services;</li>
								<li>Hosting services;</li>
								<li>Email services; and</li>
								<li>Analytics services;</li>
							</ol>
						</li>
						<li>
							<p>The User agrees that the Company shall not be responsible or liable in any way for:</p>
							<ol>
								<li>Interruptions to the availability of Tap A Tradie Worldwide due to third-party services; or</li>
								<li>Information contained on any linked third party website.</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Liability &amp; ;Indemnity</strong></p>
					<ol>
						<li><p>The User agrees that it uses Tap A Tradie Worldwide at its own risk.</p></li>
						<li><p>The User acknowledges that Tap A Tradie Worldwide does not make Jobs on its own behalf.</p></li>
						<li>
							<p>
								The User acknowledges that the Company is not responsible for the conduct or activities of any
								Tradesperson and that the Company is not liable for such under any circumstances.
							</p>
						</li>
						<li>
							<p>
								The User acknowledges that the Company is not responsible for the conduct or activities of any
								Tradesperson and that the Company is not liable for such under any circumstances.
							</p>
						</li>
						<li>
							<p>
								In no circumstances will the Company be liable for any direct, incidental, consequential or indirect
								damages, personal injury, death, damage to property, loss of property, loss or corruption of data, loss
								of profits, goodwill, bargain or opportunity, loss of anticipated savings or any other similar or
								analogous loss resulting from the User’s access to, or use of, or inability to use Tap A Tradie
								Worldwide, whether based on warranty, contract, tort, negligence, in equity or any other legal theory,
								and whether or not the Company knew or should have known of the possibility of such damage, loss,
								personal injury or death, or business interruption of any type, whether in tort, contract or otherwise.
							</p>
						</li>
						<li>
							<p>
								Certain rights and remediesmay be available under the ;<em>Competition and Consumer Act 2010</em> ;(Cth)
								or similar legislation of other States or Territories and may not be permitted to be excluded,
								restricted or modified. ; Apart from those that cannot be excluded, the Company and the Company’s
								related entities exclude all conditions and warranties that may be implied by law. ; To the extent
								permitted by law, the Company’s liability for breach of any implied warranty or condition that cannot be
								excluded is restricted, at the Company’s option to:
							</p>
							<ol>
								<li>The re-supply of services or payment of the cost of re-supply of services; or</li>
								<li>The replacement or repair of goods or payment of the cost of replacement or repair.</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Termination</strong></p>
					<ol>
						<li><p>Either party may terminate this Agreement by giving the other party written notice.</p></li>
						<li>
							<p>
								Termination of this agreement is without prejudice to and does not affect the accrued rights or remedies
								of any of the parties arising in any way out of this agreement up to the date of expiry or termination.
							</p>
						</li>
						<li>
							<p>
								Termination does not affect any of the rights accrued by a party prior to termination, and the rights
								and obligations under clauses 7.8, 7.11 and 7.12 survive termination of this Agreement.
							</p>
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Dispute Resolution</strong></p>
					<ol>
						<li>
							<p>
								If any dispute arises between the parties in connection with this Agreement (<strong>Dispute</strong>),
								then either party may notify the other of the Dispute with a notice (<strong>Dispute Notice</strong>)
								which:
							</p>
							<ol>
								<li>Includes or is accompanied by full and detailed particulars of the Dispute; and</li>
								<li>
									Is delivered within 10 Business Days of the circumstances giving rise to the Dispute first occurring.
								</li>
							</ol>
						</li>
						<li>
							<p>
								Within 10 Business Days after a Dispute Notice is given, a representative (with the authority to resolve
								the dispute) parties must meet (virtually or otherwise) and seek to resolve the Dispute.
							</p>
						</li>
						<li>
							<p>
								Subject to clause (d), a party must not bring court proceedings in respect of any Dispute unless it
								first complies with the requirements of the dispute resolution mechanism outlined in this clause.
							</p>
						</li>
						<li>
							<p>
								Nothing in this clause prevents either party from instituting court proceedings to seek urgent
								injunctive, interlocutory or declaratory relief in respect of a Dispute.
							</p>
						</li>
						<li>
							<p>
								Despite the existence of a Dispute, the parties must continue to perform their respective obligations
								under this document and any related agreements.
							</p>
						</li>
					</ol>
				</li>
				<li>
					<p><strong>Electronic Communication, Amendment &amp; Assignment</strong></p>
					<ol>
						<li>
							<p>
								The words in this clause that are defined in the ;<em>Electronic Transactions Act 1999 (Cth)</em> ;have
								the same meaning.
							</p>
						</li>
						<li>
							<p>
								The User can direct notices, enquiries, complaints and so forth to the Company as set out in this
								Agreement. The Company will notify the User of a change of details from time-to-time.
							</p>
						</li>
						<li>
							<p>
								The Company will send the User notices and other correspondence to the details that the User submits to
								the Company, or that the User notifies the Company of from time-to-time. It is the User’s responsibility
								to update its contact details as they change.
							</p>
						</li>
						<li>
							<p>
								A consent, notice or communication under this Agreement is effective if it is sent as an electronic
								communication unless required to be physically delivered under law.
							</p>
						</li>
						<li><p>Notices must be sent to the parties’ most recent known contact details.</p></li>
						<li><p>The User may not assign orotherwise create an interest in this Agreement.</p></li>
						<li>
							<p>
								The Company may assign or otherwise create an interest in its rights under this Agreement by giving
								written notice to the User.
							</p>
						</li>
					</ol>
				</li>
				<li>
					<p><strong>General</strong></p>
					<ol>
						<li>
							<p>
								<strong>Special Conditions. ;</strong>The parties may agree to any Special Conditions to this Agreement
								in writing.
							</p>
						</li>
						<li>
							<p>
								<strong>Prevalence.</strong> ;To the extent this Agreement is in conflict with, or inconsistent with,
								the terms any Special Conditions made under this Agreement, as relevant, the terms of those the Special
								Conditions or Special Conditions shall prevail.
							</p>
						</li>
						<li>
							<p>
								<strong>Disclaimer.</strong> Each party acknowledges that it has not relied on anyrepresentation,
								warranty or statement made by any other party, other than asset out in this Agreement.
							</p>
						</li>
						<li>
							<p>
								<strong>Relationship. </strong>The relationship of the parties to this Agreement does not form a joint
								venture or partnership.
							</p>
						</li>
						<li>
							<p>
								<strong>Waiver. </strong>No clause of this Agreement will be deemed waived and no breach excused unless
								such waiver or consent is provided in writing.
							</p>
						</li>
						<li>
							<p>
								<strong>Further Assurances. </strong>Each party must do anything necessary (including executing
								agreements and documents) to give full effect to ; ; ;this Agreement and the transaction facilitated by
								it.
							</p>
						</li>
						<li>
							<p>
								<strong>Governing Law. </strong>This Agreement is governed by the laws of New South Wales, Australia.
								Each of the parties hereby submits to the non-exclusive jurisdiction of courts with jurisdiction there.
							</p>
						</li>
						<li>
							<p>
								<strong>Severability.</strong> Any clause of this Agreement, which is invalid or unenforceable, is
								ineffective to the extent of the invalidity or unenforceability without affecting the remaining clauses
								of this Agreement.
							</p>
						</li>
					</ol>
				</li>
			</ol>
			<p>
				Tap A Tradie holds the right to change its terms andconditions and any time with out notice. By signing up to
				our app as a customeror service provider means your agree to all our terms and conditions.
			</p>--> */}
        Last Updated: October 2, 2021 Your privacy is important to us. We handle
        information that you provide to us and information we obtain about you
        in accordance with the terms of this Privacy Policy.
        <br />
        <br />
        <h3>
          <strong>Overview</strong>
        </h3>
        <br />
        This Privacy Policy describes the collection, use and disclosure of
        Personal Information (as defined below) by Tap A Tradie Pty Ltd (“Tap A
        Tradie”, “we,” “us”) and other parties with respect to your use of all
        properties (Web sites, mobile application, telephone service or
        otherwise) owned or operated by Tap A Tradie (collectively, the
        "Properties") and all products and services available from Tap A Tradie,
        Tap A Tradie’s family of companies (each, a “Tap A Tradie Family
        Company”), providers of home-related products and services (“Service
        Providers”) or other third parties in connection with the Properties
        (individually and collectively with the Properties, the “Services”). By
        accessing or using the Services, you are accepting the practices
        described in this Privacy Policy. If you do not agree to the terms of
        this Privacy Policy, you should stop using the Services.
        <br />
        <br />
        All capitalized terms used but not defined in this Privacy Policy have
        the meanings given in our 
        <a href="https://tapatradie.com/#/terms-and-conditions">
          Terms &amp; Conditions
        </a>
        . References to “you” means you as a User and/or as a Service Provider,
        as the case may be. References to Tap A Tradie (or “we” or “us”) also
        include companies providing services to Tap A Tradie, the Tap A Tradie
        Family Companies, and our business partners, to the extent that such
        parties are collecting, using, disclosing or providing Personal
        Information for or on behalf of Tap A Tradie.
        <br />
        <br />
        <h3>
          <strong>Information Covered</strong>
        </h3>
        <br />
        This Privacy Policy covers “Personal Information.” Personal Information
        means your unique personal identifiers, such as your name, email
        address, cellular telephone number, or government-issued identification
        number (such as your driver’s license number or social security number);
        information that we link to your unique identifier(s); and your unique
        financial information, such as your credit card number.
        <br />
        <br />
        We do not consider information that is not uniquely linked to you (such
        as your usage of the Properties if you do not provide us with
        identifying information) to be Personal Information.
        <br />
        <br />
        From time to time, we may also de-link or de-identify your Personal
        Information so that the information is not linked to you. We do not
        consider information that has been de-linked or de-identified to be
        Personal Information. For example, your address would not be Personal
        Information if it were included in a list of addresses without names or
        other unique identifiers.
        <br />
        <br />
        <h2></h2>
        <br />
        <br />
        <h3>
          <strong>Privacy Policy Updates</strong>
        </h3>
        <br />
        We may update this Privacy Policy at any time by posting a revised
        version. Any changes to this Privacy Policy will be effective
        immediately upon posting. Please review this Privacy Policy each time
        you use the Services, as your continued use of the Services after such
        changes will constitute your acceptance and agreement to such changes.
        <br />
        <h2></h2>
        <br />
        <br />
        <h3>
          <strong>Collection of Information</strong>
        </h3>
        <br />
        <br />
        <h4>Information You Provide</h4>
        <br />
        <u>Information You Submit.</u> You can visit and browse the Properties
        without opening an account and entering Personal Information. You will
        need to open an account and provide Personal Information if you would
        like to get a quote for home-related products or services, if you’d like
        to access a mover dashboard, or if you are a Service Provider who would
        like to join the Tap A Tradie network of home services providers. When
        using the Services, whether as a User or as a Service Provider, you may
        elect to provide Personal Information about yourself, such as name,
        address, telephone number, email address, payment details and
        information about your use of the Services or your experiences with Tap
        A Tradie, Service Providers or Users. You may provide Personal
        Information, for example, when you create an account, post User
        Submissions, request or purchase products or services, communicate with
        us, a Service Provider or a User, subscribe to our promotional marketing
        programs, “Like” us on Facebook or otherwise connect us to your social
        networks, or complete other forms. If you are a Service Provider, you
        may provide additional information about yourself or your company,
        including for example, when you provide details to complete your
        account, respond to service requests from homeowners, and provide
        information for background/reference checks.
        <br />
        <br />
        In connection with the Services, you may also elect to provide reviews,
        comments, feedback, notes, photos, videos, know-how, techniques, or
        other information relating to you, your project, your household, your
        business, your real or personal property or otherwise.
        <br />
        <br />
        Information that you choose to provide in a public area of the Services
        (such as your profile page or via User Submissions), including Personal
        Information, will not be protected by this Privacy Policy because you
        have chosen to make that information public.
        <br />
        <br />
        <u>Social Networks.</u> If you use the social networking connection
        functions offered through the Services, we may access any of your social
        profile information that you have made available to be shared and to use
        it in accordance with this Privacy Policy. Please refer to the policies
        of your social network applications you use to manage information that
        is shared through that account.
        <br />
        <br />
        <br />
        <h4>Information We Collect Automatically</h4>
        <br />
        <u>Cookies and Web Beacons.</u> We and our advertising networks use
        cookies, web beacons (sometimes called single-pixel gifs or action tags)
        or similar technologies on the Properties, in emails and in
        advertisements to collect information about your online activities.
        Cookies (small data files that your Internet browser stores on your hard
        disk or in your browser's memory) are used by the Services to connect
        your activity on the Services with other information we store about you
        in your account profile or from prior usage of the Services. Web beacons
        are electronic images that assist in delivering cookies, provide
        additional information (such as which ad you clicked on to arrive at the
        Properties) and allow us to compile aggregated statistics. For example,
        the use of cookies allows us to improve our Services by tracking saved
        searches, understanding your and other site visitors’ use of various
        features and functionality, delivering targeted ads that are more
        relevant to you, avoiding ad duplication, measuring the effectiveness of
        advertising and otherwise creating a consistent user experience for you.
        Collected information may include the content you view, the date and
        time you view content, and the referring web site or advertisement. This
        information may be associated with your unique browser, device
        identifier or IP address. However, we do not treat this information as
        Personal Information unless it is linked to you with your name or other
        unique identifier. <br />
        <br />
        At any time, you may adjust your browser settings to delete existing
        cookies (and the data that web beacons add to the cookie), or refuse new
        cookies, according to the method permitted by your browser. If you
        choose to delete cookies, you will need to log in again on your next
        visit to the Properties and re-enter any preferences you have set. If
        you choose to disable cookies, you may not be able to access or use some
        portions and features of the Services and may not get the best
        experience possible.
        <br />
        <br />
        Your browser may offer you a "Do Not Track" option, which allows you to
        signal to operators of websites and other properties that you do not
        wish such operators to track certain online activities. Our Services do
        not support Do Not Track requests.
        <br />
        <br />
        <u>Usage Data.</u> We and our service providers automatically record
        usage data created when you use the Services. Usage data may include
        your IP address, browser type, operating system, referring web page,
        visited web pages, mobile carrier, computer or mobile device type,
        session information such as pages visited, screen actions and other
        interaction patterns, search terms, cookie information and other
        information. We do not treat this information as Personal Information
        unless it is linked to you with your name or other unique identifier.
        <br />
        <br />
        <u>Location Data.</u> If you provide location information during the
        account registration process or at any other time via your account
        settings, or if location information is included as part of the
        information we collect (for example, your IP address may provide an
        approximate geo-location), we may store and use that information in
        connection with your account. If you are using mobile Services, we may
        collect location data directly from your mobile device if your device
        allows us to do so. Your mobile device manufacturer or mobile service
        provider may provide you with choices about how and whether location
        data is shared with us. We do not treat this information as Personal
        Information unless it is linked to you with your name or other unique
        identifier.
        <br />
        <br />
        <br />
        <h4>Other Information We Collect</h4>
        <br />
        <u>Telephone Calls.</u> When you call us, when we call you, or when we
        connect calls between Users and Service Providers, we may monitor and/or
        record those calls for quality assurance and customer satisfaction
        purposes. In those jurisdictions where consent is required for a party
        to record a telephone call, you consent to us recording such calls. We
        treat the records of these calls, when linked to you, as Personal
        Information.
        <br />
        <br />
        <u>Email and Mobile Content Programs.</u> You can choose to receive
        promotional emails from us. Like most e-commerce sites, we include
        software code in our emails to monitor whether and when you opened the
        email, whether you have clicked on the images and/or links in the email,
        and whether your computer or mobile device is capable of receiving
        HTML-based email. We treat this information, when linked to you, as
        Personal Information. You may also choose to access our content through
        a mobile application and to receive text (SMS) messages on your mobile
        device. You may opt out from email and mobile programs as described
        below under "Opting Out.”
        <br />
        <br />
        <br />
        <h4>Information Collected by Third Parties</h4>
        <br />
        <u>Online Activity.</u> You may get cookies or web beacons from our
        third-party advertisers, tracking utilities, the Tap A Tradie Family
        Companies, business partners or other third parties with links on the
        Properties. This is a standard practice in our industry, and we have no
        control or access to these cookies or web beacons. Our Privacy Policy
        does not cover the use of these technologies by third parties or the use
        of such technologies on websites or mobile applications other than the
        Properties. <br />
        <br />
        <u>Offline Activity.</u> Tap A Tradie and Service Providers may collect
        data, text, photos, videos, measurements, comments, reviews, feedback,
        notes, ideas, know-how, techniques, or other information of any nature
        whatsoever relating to you, your household, your real or personal
        property or otherwise, in connection with the Services provided by Tap A
        Tradie or the services provided by Service Providers. We treat this
        information, when linked to you, as Personal Information.
        <br />
        <br />
        <br />
        <h4>Information We Obtain From Third Parties</h4>
        <br />
        We may obtain Personal Information about you from third parties and use
        it to provide a customized experience, to offer products or services
        that might be of interest to you, to supplement or correct information
        that we have on file for you, and generally to improve our Services. For
        example, we may obtain Personal Information about you from Tap A Tradie
        Family Companies, from companies who partner with us to offer discounts,
        promotions or Tap A Tradie services (such as the Tap A Tradie Home
        Assistant) to their customers or users, or from consumer data collection
        companies. If you (or your agent or a person you authorize) orders a Tap
        A Tradie product or service that includes or reflects information about
        you, we may also collect that information either directly from you or
        from your agent or authorized representative. We treat this information,
        when linked to you, as Personal Information.
        <br />
        <br />
        <br />
        <h4>Aggregate and Anonymized Information</h4>
        <br />
        We collect non-personal, statistical information about the use of the
        Services, such as how many visitors visit a specific page, how long they
        stay, which links they click on, and how, when and how often Users order
        particular Services.
        <br />
        <br />
        We may also aggregate (group) or de-link/de-identify (anonymize)
        information. Aggregated, anonymized data is not Personal Information
        subject to this Privacy Policy, and we may use it to analyze usage of
        the Services or for any other purpose. We may also share aggregated
        and/or anonymized information with Tap A Tradie Family Companies and our
        and their business partners. For example, based on the information we
        have obtained from and about individuals, we may compile a list of
        addresses that we believe are associated with an individual moving to a
        new address and provide that list (without any unique identifiers for
        the individuals) to our business partners.
        <br />
        <br />
        <h4></h4>
        <br />
        <h3>
          <strong>Use of Personal Information</strong>
        </h3>
        <br />
        Personal Information we collect from or about you may be used in the
        following ways:
        <ul>
          <li>To provide the Services;</li>
          <li>
            To improve the Services (for example, to personalize your experience
            to make it smoother and more relevant to you), to improve the
            content and design of the Properties, and to develop new Services;
          </li>
          <li>
            To process transactions, to provide and improve customer service, to
            communicate with you about your account or changes in our policies,
            and to otherwise manage our customer relationships;
          </li>
          <li>
            To connect you with Service Providers and other companies that
            receive or help us meet requests and orders for home-related
            products and services;
          </li>
          <li>
            To help Service Providers select whether they want to work with you
            and to provide Service Providers with more opportunities to receive
            service requests that might be of interest to them;
          </li>
          <li>
            To provide you with information about products and services from Tap
            A Tradie, the Tap A Tradie Family Companies, and our and their
            business partners that may be of interest to you, and to optimize
            our and their advertising and marketing campaigns;
          </li>
          <li>
            To select, develop and deliver advertising, offers, and products and
            services from Tap A Tradie, the Tap A Tradie Family Companies and
            our and their business partners that may be of interest to you, and
            to analyze their effectiveness, distribution and reach;
          </li>
          <li>To administer contests, promotions or sweepstakes;</li>
          <li>
            To detect, investigate and prevent fraud, abuse and activities that
            may be illegal or violate our policies, to address technical and
            security issues, to comply with applicable laws and legal process,
            and to otherwise protect Users, Service Providers, and our business;
          </li>
          <li>
            To create de-identified (anonymous) information for our own uses and
            use by the Tap A Tradie family of companies and our and their
            business partners; and
          </li>
          <li>
            To perform other business purposes described at the time the
            information is collected or as otherwise set forth in applicable
            data privacy laws, such as the California Consumer Privacy Act.
          </li>
        </ul>
        <h5></h5>
        <br />
        <br />
        <h3>
          <strong>Disclosure of Information</strong>
        </h3>
        <br />
        Your Personal Information will be shared with third parties as described
        below.
        <br />
        <br />
        Except as described in this Privacy Policy, neither Tap A Tradie nor the
        Tap A Tradie Family Companies will sell or otherwise provide to third
        parties any of your Personal Information or any detailed property data
        that you provide to us or the Tap A Tradie Family Companies (including
        Personal Information or property data included in an inspection report
        provided by you or a person you authorize).
        <br />
        <br />
        <h4>Disclosures to Tap A Tradie Family Companies</h4>
        <br />
        Tap A Tradie shares your Personal Information and detailed property data
        about your home with Tap A Tradie Family Companies. For example, we
        share Personal Information with them for their marketing purposes, to
        allow them to improve their products and services (for example, to
        confirm information they have about a consumer or to classify a consumer
        as a mover), and in connection with the data, technical, accounting, and
        other services shared within the Tap A Tradie family of companies. The
        Tap A Tradie Family Companies will be bound by the terms of this Privacy
        Policy with respect to Personal Information received from Tap A Tradie
        and will use your Personal Information only as described in this Privacy
        Policy.
        <br />
        <br />
        <h4>Companies Providing Services to Tap A Tradie</h4>
        <br />
        We contract with other companies who provide business services to Tap A
        Tradie. For example, we may use a third-party service provider or a Tap
        A Tradie Family Company to process payments, host the Properties,
        provide call center or other customer service, create reports ordered by
        Users, send out information or offers, serve or manage ads, and analyze
        Services data. Some of these companies collect, process and store
        Personal Information for us as part of their services, and we provide
        them with the elements of Personal Information that they need to deliver
        their services. Companies collecting, processing and storing Personal
        Information in connection with the services they provide to us are
        prohibited from using that Personal Information for any other purpose
        and will have access only as necessary to perform the applicable
        services for us.
        <br />
        <br />
        <h4>Consumer-Directed Disclosures</h4>
        <br />
        We will share your Personal Information when you direct Tap A Tradie to
        do something that requires its disclosure. For example, if you seek a
        Service Provider through the Services, we provide your Personal
        Information to the Service Provider and the Service Provider’s
        information to you.
        <br />
        <br />
        <strong>
          <em>
            Please note that, when you submit a request for products or
            services, you are requesting to be (and you expressly consent to be)
            contacted by Tap A Tradie, Service Providers and companies that help
            connect you with Service Providers (or, if you are a Service
            Provider, by Tap A Tradie and companies that help connect you with
            homeowners), as the case may be. You consent to be contacted by
            these parties by telephone, email, mail, text (SMS) messaging, fax,
            or other reasonable means at any of the residential, mobile or fax
            phone numbers or addresses you provide, even if they are listed on a
            national "do not call" or “do not contact” list. You agree that
            these communications may include prerecorded, artificially voiced or
            autodialed telemarketing messages, and that they may be monitored
            and recorded for quality assurance and other reasons. You agree that
            these parties may contact you for the purposes of providing the
            products or services you have requested, marketing, addressing
            complaints, billing or other account-related matters, or other
            purposes reasonably related to the services you have requested. Your
            consent to receive marketing communications is not required as a
            condition of purchasing any goods or services.
          </em>
        </strong>
        <br />
        <br />
        <h4>Co-Branded Partners</h4>
        <br />
        Some of our Services may be offered in conjunction with a Tap A Tradie
        Family Company or a third party. If you request, access or use our
        Services through a Tap A Tradie Family Company or a third party, or you
        request, access or use their services through the Properties, both Tap A
        Tradie and they may receive your Personal Information. For example, if
        you sign up with Tap A Tradie, request Tap A Tradie services or consent
        to receive communications from Tap A Tradie through a partner-promoted
        or co-branded website or within a partner’s store, Tap A Tradie and that
        partner may share your Personal Information with each other.
        <br />
        <br />
        <h4>Other Partner Programs</h4>
        <br />
        From time to time, we may partner with Tap A Tradie Family Companies or
        third parties to offer discounts, rewards or other programs or
        promotions. We may disclose your Personal Information to them if you
        participate in their promotion or you purchase (or request to receive
        more information about) their products or services from us. For example,
        if a discount on a partner product or service is offered through a
        marketing communication from us or a link between their website and our
        website, we may disclose to the partner Personal Information about our
        Users that contact us as a result of the marketing communication, our
        Users that visit their website or their users who visit our website.
        <br />
        <br />
        <h4>Companies with Whom You Have a Relationship</h4>
        <br />
        If you are already a customer of or otherwise have a direct relationship
        with a business partner of Tap A Tradie or a Tap A Tradie Family Company
        (an “Existing Relationship Company”), we may disclose certain Personal
        Information to that Existing Relationship Company. If you are a match to
        a customer on the Existing Relationship Company customer’s list, we may
        provide the Existing Relationship Customer with some of your Personal
        Information, such as the groups or segments you belong to (such as mover
        or homeowner) and demographic information about you and your home (such
        as estimated household income and square footage), so that the Existing
        Relationship Company can provide you with more relevant advertising,
        products and services. Neither we nor the service provider will give the
        Existing Relationship Company your contact information, your unique
        personal identifiers, or your credit card information, unless for
        another purpose permitted in this Privacy Policy. However, the Existing
        Relationship Company may already have some or all of that information
        (because of your existing relationship with them) and they will be able
        to link you with the other information about you that we provide to
        them.
        <br />
        <br />
        <h4>Service Provider Information</h4>
        <br />
        We do not consider the business information of Service Providers to be
        Personal Information. Accordingly, we may share Service Provider
        business names, owner/proprietor names, business contact information and
        other information with third parties for any purpose.
        <br />
        <br />
        <h4>Compliance with Laws and Policies; Protection of Rights</h4>
        <br />
        We may release your Personal Information when we believe that doing so
        is appropriate to comply with applicable laws, regulations, subpoenas,
        warrants or court orders, or other legal requirements; to cooperate with
        government or law enforcement; to resolve complaints or disputes; to
        avoid legal liability; to comply with, enforce or investigate potential
        violations of our agreements, Terms of Use, program-specific terms,
        Privacy Policy or other policies; to bill and collect amounts owed to
        us; to protect our rights, reputation, safety or property or that of
        Users, Service Providers or others; and to address fraud, security or
        technical issues.
        <br />
        <br />
        <h4>Sale/Merger</h4>
        <br />
        We may decide to sell, buy, merge or reorganize our own or other
        businesses, conduct a securities offering, or do a joint venture or
        other strategic transaction. We could also be involved in a bankruptcy,
        liquidation, dissolution or similar transaction. Any such transaction
        may involve disclosing Personal Information. We would seek protections
        of confidentiality and restricted use for all information disclosed. In
        the event that we or all of our assets are acquired in such a
        transaction, our collected information would be one of the transferred
        assets.
        <br />
        <br />
        <h4>Contest/Sweepstakes</h4>
        <br />
        We may publicly disclose the name, city and state of winners.
        <h2></h2>
        <br />
        <br />
        <h3>
          <strong>
            Opting Out of Tap A Tradie Marketing; Editing Your Personal
            Information
          </strong>
        </h3>
        <br />
        <br />
        <h4>Changing Information; Closing Account</h4>
        <br />
        To change or delete your Personal Information, you may log in to your
        account and modify or remove specified information that resides in your
        account. If you want to delete your account, please contact us at
        info@tapatradie.com. We will remove your account within a reasonable
        time after receiving your request. Please note that, even after your
        account is deleted, information that you chose to provide in a public
        area of the Services (such as reviews and projects) will remain visible
        to the public and may remain in the accounts of Users and Service
        Providers with whom such information has been shared, and all of your
        information (including your Personal Information) will remain in Tap A
        Tradie’s backup/archival records. Tap A Tradie may retain and use
        information in our records as described in the Terms of Use and this
        Privacy Policy, including the section above entitled 
        <em>
          Disclosure of Information/Compliance with Laws and Policies;
          Protection of Rights
        </em>
        . <br />
        <br />
        You may also make requests regarding your Personal Information, such as
        requests to access information or requests to update or correct
        inaccurate information, by emailing us at info@tapatradie.com or writing
        us at 152 St Georges Tce, Perth, WA 6000
        <br />
        <br />
        <h4>Marketing Texts</h4>
        <br />
        Receiving promotional text (SMS) messages from Tap A Tradie is
        completely voluntary, and you may opt out at any time.
        <br />
        <br />
        To opt out of promotional calls or text (SMS) messages from Tap A
        Tradie, you can contact Tap A Tradie by sending an opt-out request to
        info@tapatradie.com. In addition, to opt out of promotional text (SMS)
        messages from Tap A Tradie, you can text STOP to any text (SMS) message
        you receive. You may receive a final text message confirming your
        opt-out. Please allow up to 10 business days to process any opt-out
        request. Message and data rates may apply.
        <br />
        <br />
        <h4>Email Communications</h4>
        <br />
        You can unsubscribe at any time from receiving promotional emails from
        Tap A Tradie by clicking on the unsubscribe link included at the bottom
        of our email messages. In addition, you can contact Tap A Tradie by
        sending an opt-out request to info@tapatradie.com. You may receive a
        final email confirming that you have been unsubscribed. Please allow up
        to 10 business days to process any unsubscribe request.
        <br />
        <br />
        <h4>Direct Mail</h4>
        <br />
        You can opt out at any time from receiving direct-mail promotional
        correspondence from Tap A Tradie by sending a request to
        info@tapatradie.com.
        <br />
        <br />
        <h4>Continued Communications After Opt-Out</h4>
        <br />
        Even if you opt out of receiving marketing communications, you may still
        receive non-promotional communications from us. We reserve the right to
        send you service announcements (such as notifications about site
        outages) or administrative messages, without offering you the
        opportunity to opt out of receiving them. In addition, because we must
        communicate with you about service requests that you have submitted (or
        received, if you are a Service Provider), you cannot opt out of
        receiving emails, text (SMS) messages or calls from us relating to those
        requests.
        <br />
        <br />
        <h4>Opting Out of Communications from Third Parties</h4>
        <br />
        To opt out from receiving promotional communications from a third party,
        or to make requests regarding your Personal Information or other
        information held by a third party, you should contact the third party
        directly.
        <br />
        <br />
        <h4>Security</h4>
        <br />
        The security of your Personal Information is important to us. We
        maintain industry-standard physical, electronic, and procedural
        safeguards, such as firewalls and encryption technology, to protect
        against the loss, misuse, and alteration of the information under our
        control. For example, when you enter a credit card number on the
        Properties, we encrypt the transmission of that information using secure
        socket layer (SSL) technology. However, no method of transmitting
        information over the Internet or storing information is completely
        secure. Accordingly, we cannot guarantee the protection of any
        information shared with us.
        <br />
        <br />
        If you create an account, you may be asked to choose a password to
        protect your account and account information. We recommend that you do
        not disclose your password to any other person. You are responsible for
        maintaining the confidentiality of your password and account and are
        fully responsible for all activities that occur under your password or
        account.
        <br />
        <br />
        <h3>
          <strong>General Matters</strong>
        </h3>
        <br />
        <br />
        <h4>Children</h4>
        <br />
        The Services are not directed to children under 16, and we do not
        knowingly collect or store any Personal Information about persons under
        the age of 16. If we learn that we have collected Personal Information
        of a child under 16, we will make commercially reasonable efforts to
        delete such information from our files. If you are under the age of 16,
        please do not submit any Personal Information through the Properties.
        <br />
        <br />
        <h4>Third-Party Websites</h4>
        <br />
        Our Services may contain links to other websites and services. Any
        information that you provide on another website or service is provided
        directly to the owner or operator of the website or service and is
        subject to that party's privacy policy. In addition, if you visit the
        Properties through a link or advertisement on another website, then that
        website may be collecting information from users who click on the link
        or banner, and the collected information will be subject to that
        website’s privacy policy. Our Privacy Policy does not apply to any such
        websites or services, and we are not responsible for their content,
        privacy or security practices and policies. To protect your information
        we recommend that you carefully review the privacy policies of other
        websites and services that you access. If you have any questions
        regarding the privacy policy of a third party, you should contact the
        third party directly for more information.
        <br />
        <br />
        <h4>Governing Law; Visitors Residing Outside Australia</h4>
        <br />
        All of the Services are hosted in Australia. This Privacy Policy and the
        privacy practices of the Properties will be subject exclusively to the
        laws of the State of Western Australia within Australia, without regard
        to conflict of law principles. If you reside outside of Australia, you
        are responsible for complying with local laws in connection with your
        use of the Services, and you consent to the collection, transfer,
        storage, and use of your Personal Information in Australia in accordance
        with this Privacy Policy.
        <br />
        <br />
        The laws governing processing of Personal Information vary depending on
        the jurisdiction in which you reside. To the extent the laws of your
        jurisdiction are more restrictive than the terms of this Privacy Policy,
        it is Tap A Tradie’s policy to follow the requirements of those laws to
        the extent those laws are applicable to Tap A Tradie’s activities.
        <br />
        <br />
        <h4>Tap A Tradie Terms &amp; Conditions</h4>
        <br />
        Your access or use of the Services is subject to 
        <a href="https://tapatradie.com/#/terms-and-conditions">
          Tap A Tradie’s Terms &amp; Conditions
        </a>
        . <br />
        <br />
        <h4>Contacting Us</h4>
        <br />
        If you have any questions or suggestions regarding our Privacy Policy,
        please contact us by email at info@tapatradie.com or in writing at 152
        St Georges Tce, Perth, WA 6000.
        <br />
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
              <img src={privacy_policy_1} alt="" />
            </div>
          </div>
        </section>
      {/* )} */}

      {/* <Footer /> */}
    </div>
  );
};

export default PrivacyPolicyApp;
