import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeadImg from "../../assets/images/featured_img-1617688979040.png";
import BlogImg1 from "../../assets/images/featured_img-1.jpg";
import BlogImg4 from "../../assets/images/featured_img-4.png";
import BlogImg5 from "../../assets/images/featured_img-5.png";
import BlogImg3 from "../../assets/images/featured_img-1610944807148.jpeg";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../redux/auth/action";
import { Link } from "react-router-dom";


const Index = () => {
  const Dispatch = useDispatch();
  const { change_blogs_article_Action } = Actions;
  const { blogsArticleId } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
      <div className="blog-section">
        <div className="blog-section__heading">
          {blogsArticleId === "painter.jpg" ? (
            <>
              <p>Top Tips When Painting Your Home Interior</p>
            </>
          ) : null}
          {blogsArticleId === "plumbing.jpg" ? (
            <>
              <p>How To Find The Best Plumber For Your Home</p>
            </>
          ) : null}
          {blogsArticleId === "concrete.jpg" ? (
            <>
              <p>How You Can Repair Damaged Concrete Steps</p>
            </>
          ) : null}
          {blogsArticleId === "kitchen.jpg" ? (
            <>
              <p>Top 6 Kitchen Remodeling Ideas To Consider</p>
            </>
          ) : null}
          {blogsArticleId === "electrician.jpg" ? (
            <>
              <p>Guide To Electrical Connections In Your Home</p>
            </>
          ) : null}
        </div>
        <div className="blog-section__two">
          <div className="headingImg">
            <img src={`/static/images/featured_img-${blogsArticleId}`} />
          </div>
          <div className="rightBlogs">
            <p>Latest Articles</p>
            <div
              className="newBlogs"
              onClick={() => {
                Dispatch(change_blogs_article_Action("electrician.jpg"));
              }}
            >
              <div className="newBlogsImg">
                <img src={BlogImg1} />
              </div>
              <div className="newBlogsText">
                <span>Guide To Electrical Connections In Your Home</span>
              </div>
            </div>
            <div
              className="newBlogs"
              onClick={() => {
                Dispatch(change_blogs_article_Action("painter.jpg"));
              }}
            >
              <div className="newBlogsImg">
                <img src={HeadImg} />
              </div>
              <div className="newBlogsText">
                <span>Top Tips When Painting Your Home Interior</span>
              </div>
            </div>
            <div
              className="newBlogs"
              onClick={() => {
                Dispatch(change_blogs_article_Action("kitchen.jpg"));
              }}
            >
              <div className="newBlogsImg">
                <img src={BlogImg3} />
              </div>
              <div className="newBlogsText">
                <span>Top 6 Kitchen Remodeling Ideas To Consider</span>
              </div>
            </div>
            <div
              className="newBlogs"
              onClick={() => {
                Dispatch(change_blogs_article_Action("plumbing.jpg"));
              }}
            >
              <div className="newBlogsImg">
                <img src={BlogImg4} />
              </div>
              <div className="newBlogsText">
                <span>How To Find The Best Plumber For Your Home</span>
              </div>
            </div>
            <div
              className="newBlogs"
              onClick={() => {
                Dispatch(change_blogs_article_Action("concrete.jpg"));
              }}
            >
              <div className="newBlogsImg">
                <img src={BlogImg5} />
              </div>
              <div className="newBlogsText">
                <span>How You Can Repair Damaged Concrete Steps</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-section__bottomParagraphs">
          {blogsArticleId === "painter.jpg" ? (
            <>
              <p>
                Painting the interior of your home for a fresh new look can seem
                simple. After all, it’s about adding the right color paint to a
                flat surface, right?
              </p>
              <p>
                However, doing the ideal paint job requires skill to achieve
                that professional and even look.
              </p>
              <p>
                These 9 tips will help you make the most of your interior house
                painting. Let’s find out!
              </p>
              <span>1. Start by cleaning the surface</span>
              <p>
                Before you can even think about applying paint to any home
                interior, the first thing that you should do is to clean the
                wall surfaces. This helps remove any dirt or foreign matter from
                the wall.
              </p>
              <p>
                A tack cloth is inexpensive and simple to use and is a perfect
                tool for cleaning the wall surfaces. It can easily pull off
                dirt, and when dealing with a wooden wall, it can remove any
                sawdust and bits of loose paint.
              </p>
              <p>
                Another major benefit of using a tack cloth is eliminating the
                need to use a wet cloth on the walls.
              </p>
              <p>
                But don’t worry if you don’t have a tack cloth as you can always
                use a damp cloth instead to clean the surface of the wall.
              </p>
              <p>
                That said, it is important to note that you should not use a
                tach cloth for large wall surfaces. Instead, you will get the
                best results when using it for small wall surfaces.
              </p>
              <p>
                Since a tack cloth uses beeswax, never apply too much pressure
                when cleaning the wall as it will only cause beeswax stains on
                the walls.
              </p>
              <span>2. Get high-quality paintbrush and roller</span>
              <p>
                The keyword here is high quality. If you go for cheap and poor
                quality rollers for instance, they will leave lint and bumps as
                you paint the walls. When the paint eventually dries, these
                bumps will be easily noticeable and will be extremely hard to
                fix.
              </p>
              <p>
                Similarly, poor quality brushes will leave streak marks and will
                also leave strips of hair onto the paint. This will result in a
                low-quality paint job.
              </p>
              <p>
                Many homeowners looking to paint their home interior are often
                tempted to use chip brushes. However, these are not meant for
                interior home painting. They are designed for the application of
                glue, solvents, and adhesives.
              </p>
              <p>
                Getting quality rollers and paintbrushes means that you can
                achieve a smooth, glossy, and professional finish to your paint
                job.
              </p>
              <span>3. Top-quality paint</span>
              <p>
                Having good quality tools will mean little if you don’t combine
                these with good quality paint.
              </p>
              <p>
                You want to steer clear of cheap builders paint. These have few
                solids compared to the higher quality paints.
              </p>
              <p>
                You thus need to go for a paint with higher quantity solids.
                These will produce the best finish and will last for a long time
                in the future.
              </p>
              <span>4. Test for any loose paint</span>
              <p>
                Chances are when repainting your home interior that you plan on
                adding a new coat of paint to an existing coat of paint.
              </p>
              <p>
                The last you need is to apply paint where the underlying coat is
                loose and is coming off. The best way to test whether the
                initial paint is coming off is to use the duct tape test.
              </p>
              <p>
                Add duct tape to the wall, hold one end of the tape and then rip
                it out. If you notice paint coming off, then it's best to
                consider removing the paint and sanding the wall before adding
                the fresh new paint.
              </p>
              <p>
                Otherwise, if you put on fresh paint on loose paint, then odds
                are you will start to see the paint coming off the wall after a
                few months.
              </p>
              <p>
                If you are not confident in your skills as a painter, consider
                getting the services of a professional through{" "}
                <Link to="https://tapatradie.com/">Tap a Tradie</Link>. With a
                simple click of a button, you can connect to highly qualified
                professionals in your area for that perfect paintjob.
              </p>
              <span>5. Have your latex or Nitrile gloves on</span>
              <p>
                Water-based paints are simple to remove and will often come out
                after a thorough wash. However, enamel or oil based paints can
                be difficult to clean off your hands.
              </p>
              <p>
                Put on latex gloves to ensure that your hands remain clean when
                painting your home interior. Some people, however, are allergic
                to latex.
              </p>
              <p>If you are one of them, consider nitrile gloves.</p>
              <span>6. Use a low stick painters tape</span>
              <p>
                There will be surfaces on your interior walls that will not be
                painted. To prevent such surfaces from getting paint, use a low
                stick painter's tape.
              </p>
              <p>
                The main benefit of this tape is that the adhesive is not as
                strong as that of duct tape and is therefore simple for people
                without removing the wall paint.
              </p>
              <span>7. Avoiding overlap marks</span>
              <p>
                When painting, you will need a strategy to help you avoid
                overlap marks. These marks are more likely to show the glossier
                the paint.
              </p>
              <p>
                If you are looking for a defined separation, using a wet edge
                can help you achieve that.
              </p>
              <p>
                You will not need to worry about overlap marks with matte or
                flat paint, and you thus don’t need a wet edge.
              </p>
              <span>8. Using a masking film</span>
              <p>
                Professional painters will often use masking film to cover any
                areas where they don’t want the paint to get to.
              </p>
              <p>
                It is a useful tool to have as it sticks easily onto surfaces.
                This is unlike the thicker plastic sheeting often used to cover
                furniture when painting.
              </p>
              <p>
                With the masking film, all you need to do is place it on top of
                a surface, and it will stick without the need for adhesive. It
                does this through the use of static electricity.{" "}
              </p>
              <p>
                This is highly convenient when working on large walls to help
                save time.
              </p>
              <span>9. Wrapping brushes and rollers</span>
              <p>
                After working on your home painting project, then comes the task
                that many people do not enjoy. That is cleaning the rollers and
                paintbrushes.
              </p>
              <p>
                Often even after thoroughly cleaning the rollers, some paint may
                remain, which causes the roller to become stiff after drying.
              </p>
              <p>
                However, if you intend to use the roller soon, then you don’t
                have to deal with the task of cleaning it every evening. Simply
                put the roller with paint in a plastic bag and put them in the
                freezer.
              </p>
              <p>
                You could also just wrap the roller in the bag and place it
                somewhere at room temperature.
              </p>
              <p>
                As for the brush, you can store it the same way as the roller or
                use a paint comb.{" "}
              </p>
            </>
          ) : null}
          {blogsArticleId === "plumbing.jpg" ? (
            <>
              <p>
                Our home plumbing system can be complex. You may be a DIY
                enthusiast and love fixing things by yourself. However, sooner
                or later, you will require the expertise of a plumber.
              </p>
              <p>
                Getting the right plumber is not as easy as it may seem. You
                want to make sure that you get top-notch services from a highly
                qualified professional.
              </p>
              <p>
                Let’s discover how to sift through the many options available in
                your area to locate the best plumber for your home.
              </p>
              <span>Not all plumbers are equal</span>
              <p>
                Most plumbers specialize in a specific area. Some prefer to do
                new installations ad are ideal when remodeling or building your
                home.
              </p>
              <p>Other plumbers specialize in snaking and unclogging tasks.</p>
              <p>
                Plumbers will have a specialty license based on the area they
                focus their discipline on.
              </p>
              <p>
                It is important, therefore, that you find the right plumber for
                your needs.
              </p>
              <p>
                Master plumbers will often have the most experience and can,
                therefore, perform a higher quality job. They are also likely to
                have their own business.
              </p>
              <p>
                Journey man plumbers will work at a plumbing business and will
                also have plenty of experience.
              </p>
              <p>
                To locate the right plumber, you will need first to identify the
                problem.
              </p>
              <span>What to always check from your plumber</span>
              <p>
                Okay, so plumbers differ in experience and in specialty. That
                said, any plumber should be able to provide several important
                things.
              </p>
              <span>1. Insurance and license</span>
              <p>
                The first thing that you should ask for in you plumber are
                insurance and license documents. A proper plumber should have
                these in place and are strong evidence that the plumber takes
                his or her work seriously.
              </p>
              <p>
                Also, check their work comp policy. This should be up to date.
              </p>
              <p>
                And while you may have home owner’s protection policy, the last
                thing you need is to be solely responsible for the damage caused
                by the plumber.
              </p>
              <span>2. Soft skills</span>
              <p>
                Look for signs such as etiquette and good manners. Do they park
                the car at the right place, do they talk respectfully on the
                phone and in person, and do they remove their shoes before
                entering the house?
              </p>
              <p>
                If the plumber displays any of these, they are likely to treat
                the work with the utmost care and offer high-quality services.
              </p>
              <span>3. References of previous clients</span>
              <p>
                It is important to get a grasp of the quality of workmanship
                that the plumber offers. Ask them for references of previous
                clients.
              </p>
              <p>
                Note that the plumber is more likely to offer you contacts to
                their best clients. Nonetheless, it is important that you ask
                the clients questions such as:
              </p>
              <ul>
                <li>• What type of work did the plumber do for you?</li>
                <li>• What did you think about the quality of work? </li>
                <li>• Would you consider hiring the plumber again? </li>
              </ul>
              <p>
                You can use the tone of voice that the client uses to judge how
                satisfied they were with the plumber.
              </p>
              <span>4. The warranty</span>
              <p>
                Another way to judge the authenticity of a plumber is to ask for
                a warranty. Any top-notch plumber will be familiar with the
                various warranties offered by manufacturers of plumbing
                products.
              </p>
              <p>
                Furthermore, they should also offer their own workmanship
                warranty. This will give you the assurance you need that you
                will get a quality job.
              </p>
              <span>5. Community associations</span>
              <p>
                Many homeowners tend to overlook this step but it is a great way
                to understand the nature of the business and quality of plumber
                who is going to work in your house.
              </p>
              <p>
                If they are members of a community association such as the local
                BBB and other trade associations, then there is a high chance
                that the business had developed its popularity through quality
                and hard work rather than through good marketing practices.
              </p>
              <span>Where to search for the best plumber</span>
              <p>
                One of the easiest and most convenient ways to search for a
                plumber is online. However, you need to be careful not to pick a
                plumber simply based on their search engine rankings.
              </p>
              <p>
                Keep in mind that appearing on Google's first page may simply
                mean that the plumber is a good digital marketer. This is by no
                means a good reflection of their work.
              </p>
              <p>
                Make sure that you carefully go through the business website as
                one way to get a feel of the quality of the business.
              </p>
              <p>
                <Link to="https://tapatradie.com/">Tap a Tradie</Link> lets you
                quickly get access to a plumber. It saves you the hassle of
                having to go through a lengthy vetting process. You can access
                your ideal plumber with a just a few clicks. What’s more, you
                will be able to see the plumber as they make their way to your
                house via online tracking.{" "}
              </p>
              <p>
                If you choose to go the internet route, make sure you read the
                reviews from other previous clients. This will help paint a
                clear picture of the plumber.
              </p>
              <p>
                Another great way to get In touch with a reliable plumber is
                through referrals from friends and family.{" "}
              </p>
              <p>
                If your area has a local Facebook page, residents may also
                recommend great plumbers.
              </p>
              <span>Deciding on a plumber</span>
              <p>
                You have narrowed down your search to several plumbers. Now it’s
                time to make the final decision.
              </p>
              <p>
                Note that you don’t have to call all 10 or so plumbers if you
                are using a list. Narrow down to 3 or 4 of your best plumbers
                before making your final decision.
              </p>
              <p>
                During the vetting process, ask them similar questions and see
                how each responds to them.
              </p>
              <p>These questions may include:</p>
              <ul>
                <li>• What area do you specialize in? </li>
                <li>• Have you done this type of work before? </li>
                <li>• Can you guarantee the work? </li>
                <li>
                  • Are you a member of any associations or community groups?{" "}
                </li>
                <li>• How long will it take you to complete the project? </li>
                <li>• Will you notify me if the project takes longer? </li>
                <li>• Will you notify me if the project costs more? </li>
              </ul>
              <span>The importance of continued communication</span>
              <p>
                Communication needs to continue even after hiring a plumber.
                This will help ensure the project runs smoothly and problems are
                solved.
              </p>
              <p>
                Before the plumber can start working, make sure to communicate
                your expectations, concerns, and budget.
              </p>
              <p>
                Note also that there is still the potential for surprises. It is
                important, therefore to prepare yourself mentally in case the
                problems is bigger than you expected.
              </p>
            </>
          ) : null}
          {blogsArticleId === "concrete.jpg" ? (
            <>
              <p>How You Can Repair Damaged Concrete Steps</p>
              <p>
                Granted, concrete steps are durable and are bound to last for
                many years to come. That said, they are not immune to wear and
                tear.
              </p>

              <p>
                If you are hauling hard objects up concrete steps, for instance,
                this can cause the steps to chip and crack. This is especially
                so at the edges.
              </p>
              <p>
                Over time the steps will appear rugged and less visually
                appealing. They can drastically affect your home’s aesthetics,
                making it appear neglected.
              </p>

              <p>
                These are just some important reasons to fix and repair any
                visible damage to your concrete steps.
              </p>
              <p>
                Let’s find out how to make your concrete steps look new again.
              </p>

              <span>Top reasons to repair your concrete steps</span>
              <p>
                Besides making your home visually appealing, damaged concrete
                steps can be a safety hazard to family and visitors. Keep in
                mind that you are legally responsible for injuries that occur to
                people when on your property.
              </p>
              <p>
                Secondly, damage to concrete starts off slow. However, after a
                certain level, the damage becomes even more significant and
                happens faster.
              </p>
              <p>
                What may appear as a tiny and insignificant crack may quickly
                become more significant and extend to the next steps? It helps
                to catch the problem and repair it early to prevent further
                damage and expenses.
              </p>
              <span>When should you repair concrete steps?</span>
              <p>
                You should ideally repair your concrete steps immediately you
                notice any damage. This enables you to be proactive and to
                prevent further damage.
              </p>
              <p>
                Consider the temperature when doing your repair. Concrete will
                cure best between 45F and 90F. Anything outside of this
                temperature range will often cause the concrete to cure slowly.
              </p>
              <span>Starting with the basics</span>
              <p>
                One thing to always keep in mind before starting a concrete
                repair project is that concrete dries extremely fast. It will
                become hard in about 10 minutes.
              </p>
              <p>
                This, therefore, means that you need to work fast. As soon as
                you mix the concrete, you should be ready to apply it on the
                damaged area.{" "}
              </p>
              <p>
                Secondly, any dirt, debris, moss, or plant growth will prevent
                the concrete from sticking.
              </p>
              <p>
                Start by cleaning the area thoroughly and getting rid of any
                dirt, debris, or foreign matter.
              </p>
              <p>
                Next, decide the best way to repair the damaged area. If the
                edges of the steps require fixing, you will need to use the
                right tools like a margin trowel to sculpt the form.
              </p>
              <p>
                If the damage is a crack on the step, then you don’t have to
                worry about sculpting the form. You will, however, still need to
                work fast.{" "}
              </p>

              <span>Take note of regulations and permits</span>
              <p>
                If the damage to your concrete steps is minor, you may not need
                to hire a professional.
              </p>
              <p>
                On the other hand, if the damage is significant, then the
                regulations in your area may require you to hire a professional.{" "}
              </p>
              <p>
                A great way to find the best mason to fix your concrete is
                online. <Link to="https://tapatradie.com/">Tap a Tradie</Link>{" "}
                brings you closer to the best professional services in your area
                at just a click away.{" "}
              </p>
              <p>
                It is crucial to start by understanding the various codes,
                permits, and regulations in your residential area to ensure you
                operate within the law.
              </p>
              <span>Safety measures</span>
              <p>
                Concrete projects often come with exposure to fine dust. This
                can come from the dust from the concrete or even from the
                acrylic fortifier. This can cause respiratory health issues.
              </p>
              <p>Ensure that you always use a respirator.</p>
              <p>
                Also, wear latex gloves or latex substitute to prevent injury to
                your hands.
              </p>
              <p>
                Finally, always keep your eyes protected by putting on safety
                glasses.
              </p>
              <span>Tools and materials you need to repair concrete steps</span>
              <ul>
                <li> Hammer</li>
                <li> Margin trowel</li>
                <li>Wire brush </li>
                <li> Spray bottle</li>
                <li> Shop vacuum </li>
                <li>Masonry chisel </li>
                <li> Bucket</li>
                <li>Concrete </li>
                <li>Liquid concrete cleaner </li>
                <li>Acrylic fortifier </li>
              </ul>

              <span>Steps to repairing concrete steps</span>
              <span>Step 1: preparing the concrete steps</span>
              <p>
                Start by using a broom to sweep away any dirt and debris on the
                concrete steps.
              </p>
              <p>Use bleach to kill off and remove any mold or mildew.</p>
              <p>
                You can also kill off any mold with a zinc-based mold killer.
              </p>
              <p>
                Next, take your wire brush and brush away at the surface of the
                damaged area.
              </p>
              <p>
                Using a hammer and masonry chisel, chip away at any hanging bits
                of concrete
              </p>
              <p>
                Use a concrete cleaner to remove any dirt and sticky residue,
                such as tree sap that could be on the concrete.
              </p>
              <span>Step 2: preparing the concrete</span>
              <p>
                Take 4 parts concrete and 1 part fortifier and mix it thoroughly
                in the bucket. Go for a consistency similar to that of peanut
                butter.
              </p>
              <span>Step 3: wet the surface</span>
              <p>
                Using water, wet the surface of the affected area. This allows
                the concrete to stick to the surface.
              </p>
              <span>Step 4: filling in the step</span>
              <p>
                This step requires you to fill in the cracked or broken area,
                ensuring the concrete reaches the entire crevice.
              </p>
              <p>
                Using the margin trowel, take a small amount of concrete and
                press it down on the damaged area.
              </p>
              <span>Step 5: sculpt the concrete</span>
              <p>
                For the finishing touches, take the margin trowel and pat the
                concrete while it is still wet. Smooth it out to bring
                everything flush with the rest of the concrete step.
              </p>
              <p>
                If there is excess concrete, simply cut it off with the trowel
                and put it back in the bucket.
              </p>
              <span>Step 6: curing the concrete</span>
              <p>
                Concrete needs to remain fairly wet for it to cure properly.
                Using the spray bottle, keep the concrete wet for at least 24
                hours. You can periodically check the concrete and spray water
                on it when it starts to dry up.
              </p>
              <p>Note that you do not have to do this at night.</p>
              <p>
                Ensure that there is no traffic on the steps to prevent people
                from stepping on the concrete and deforming it until the
                concrete is completely dry and cured.
              </p>
              <span>When to consider a professional</span>
              <p>
                There are several instances where you may need to hire the
                services of a professional.
              </p>
              <p>
                First, if you are not confident that you can fix the damaged
                concrete steps on your own, it is best to let a professional
                handle it for the best results.
              </p>
              <p>
                If the concrete step has a large crack that extends
                significantly into the steps, a professional will have the
                required expertise to fix the steps.
              </p>
              <p>
                Finally, always check the rules and regulations in your
                location. This will help you find out if your situation required
                that a professional mason repair the damage.
              </p>
            </>
          ) : null}
          {blogsArticleId === "kitchen.jpg" ? (
            <>
              <p>
                Kitchens are a place where family and friends come together. Add
                some good food in the mix, and it’s a winning combination.
              </p>
              <p>
                Therefore, it makes sense that most home remodels will give a
                lot of attention to the kitchen. Done the right way, the kitchen
                can add to the value of your home.
              </p>
              <p>
                When thinking about remodeling our kitchen, it is tempting to go
                with current trends. However, keep in mind that trends can
                change.
              </p>
              <p>
                Instead, focus on creating a kitchen that will not only remain
                stunning through the years but will also help maintain the value
                of your home.
              </p>
              <p>
                Get the perfect professional when remodeling your kitchen with{" "}
                <Link to="https://tapatradie.com/">Tap a Tradie</Link>. Here are
                some top 5 kitchen remodeling ideas to consider.
              </p>
              <span>1. Choose the ideal paint and color</span>
              <p>
                One of the most cost-effective ways to improve your kitchen's
                look is to choose the right paint and color.
              </p>
              <p>
                What’s was once a dull-looking space can instantly turn into a
                warm room where family and friends want to hang out.
              </p>
              <p>
                You can greatly improve the “wow factor” with the right color
                scheme.
              </p>
              <p>
                A traditional white color will brighten the space and put anyone
                who walks into the kitchen in the mood of fixing a delicious
                meal spending and time here.
              </p>
              <p>
                However, if you want a more modern look and plenty of natural
                light coming into the kitchen through the windows, you may
                consider giving your kitchen walls a dark theme with black or
                dark grey paint.
              </p>
              <p>This can help add a bit of drama and style to your kitchen.</p>
              <span>2. Upgrade the kitchen cabinets</span>
              <p>
                Kitchen cabinets take a large surface area in the kitchen and
                are among the first things that people will notice in your
                kitchen.
              </p>
              <p>
                If they look dated and dull, they will likely make the entire
                kitchen feel boring. This is why you simply cannot afford to
                overlook the kitchen cabinets.
              </p>
              <p>
                One way to spice up your kitchen is to add a bit of contrast
                with the kitchen cabinets. If you have white painted kitchen
                walls, you may go with a darker gray color.
              </p>
              <p>For grey walls, consider brown kitchen cabinets.</p>
              <p>Brown color is also an excellent choice for black walls.</p>
              <p>
                Sometimes painting your kitchen cabinets is all it takes to add
                drama. However, if the cabinets are worn out, don’t hesitate to
                tear them down and install new cabinet doors.
              </p>
              <span>3. Countertops</span>
              <p>
                Another eye-catcher that you simply cannot afford to overlook is
                kitchen countertops. Like the cabinets, you want countertops
                that will blend perfectly with the rest of the kitchen.
              </p>
              <p>
                Countertops can make or break the entire look and feel of your
                kitchen.
              </p>
              <p>
                There are several types of countertops, including stainless
                steel, laminate, and concrete.
              </p>
              <p>
                If you are not limited by your budget and you want to add a bit
                of style and elegance, consider quartz countertops.
              </p>
              <p>
                Quartz countertops are made from minerals and resins. And while
                it appears like a natural stone, it is actually harder than
                natural stone.
              </p>
              <p>
                Other than adding style in your kitchen, quartz countertops are
                impermeable. You can work comfortably on its surface without
                worrying about scratching it.
              </p>
              <p>
                Furthermore, quartz countertops come in a plethora of styles and
                looks. From the concrete look to stone like appearance to
                everything in between.
              </p>
              <span>4. Attention-grabbing backsplash</span>
              <p>
                When looking to grab instant attention, one of the very best
                ways is to install a kitchen backsplash.
              </p>
              <p>
                The great thing is it is simple to install and with a little
                do-it-yourself inspiration, you don’t have to hire the services
                of a professional. This can help you save significantly on the
                costs.
              </p>
              <p>
                Kitchen backsplash can mean a lot of things to different
                homeowners. Think of installing metal tiles, veneer stone,
                laminate flooring, or tile decals.
              </p>
              <p>
                Consider what is available on the market and its impact on the
                overall look of your kitchen. Does it blend with the paint job
                and the cabinet doors?
              </p>
              <p>
                If so, then do not hesitate to spruce up the look of the kitchen
                with some backsplash.
              </p>
              <span>5. Change the Lighting</span>
              <p>
                We often focus our attention on various other aspects of our
                kitchens and completely neglect the lighting.
              </p>
              <p>
                Bringing in stylish lighting fixtures can help add a bit of
                personality to your kitchen. The best lighting fixtures are
                instantly noticeable. Not only will they add to the aesthetics
                but they will also offer fantastic illumination.
              </p>
              <p>
                Pendant lighting is a trend that shows no sign of slowing down.
                They can come in different designs so you can be sure to find
                one that best suits your kitchen.
              </p>
              <p>
                When searching for the best pendant lighting fixtures, it is
                best to go bold here. This ensures that anyone who walks into
                your kitchen instantly notices the lights.
              </p>
              <p>
                That said, be careful not to overdo it. You don’t want to
                install too many pendant lights or lighting that is too large.
              </p>
              <p>
                After all, you want the whole kitchen to blend in perfectly. You
                don’t want the lights to be the center of focus in your kitchen.
              </p>
              <span>6. Upgrade your appliances</span>
              <p>
                Kitchens go hand in hand with appliances. In fact, you may argue
                that appliances are at the forefront of any kitchen as they
                ensure the job is done.
              </p>
              <p>
                Question is, are your appliances helping to add to the
                aesthetics of the kitchen?
              </p>
              <p>
                If you have old appliances, then they may not blend well with a
                more modern look. For instance, a white fridge may not work well
                with black walls and brown cabinet doors.
              </p>
              <p>
                In this case, you will find that a silver fridge is better
                suited.
              </p>
              <p>
                White appliances, however, can work well with white painted
                walls.
              </p>
              <p>
                Another benefit of getting modern appliances is they are more
                energy-efficient. Not only do they add to the aesthetics of your
                kitchen, they also help save on electricity consumption. It’s a
                win win.
              </p>
              <p>
                When you are remodeling your kitchen, you likely want to change
                the entire feel. You want your kitchen to both feel and look
                brand new.
              </p>
              <p>
                Old appliances may bring back memories of the old kitchen. New
                ones, on the other hand, will make your kitchen feel completely
                brand new.
              </p>
            </>
          ) : null}
          {blogsArticleId === "electrician.jpg" ? (
            <>
              <p>
                All-around and inside your home are electrical connections from
                circuit breakers, electrical outlets, and switches. This is
                whether we are running our electronics, for illumination or for
                kitchen appliances.
              </p>
              <p>
                The electrical connections must be done the best way. After all,
                loose connection will cause your electrical appliances to heat
                up and damage. What’s more, loose connections can easily start a
                fire and is hazardous to family and property.
              </p>
              <p>
                This guide teaches you what you need to know about the
                electrical connection. With the information, you can make sure
                that any connection in your home is done the right way. You can
                eliminate the risk of fire or damage and ensure that your
                household uses electricity safely.
              </p>
              <p>
                One of the main areas that you will need to focus on are the
                electrical wires and the circuit breakers. Both the wires and
                the circuit breakers need to be of the right size.
              </p>
              <p>Without further ado, let’s dive straight in!</p>
              <span>Connecting appliances</span>
              <p>
                Whether it’s a coffee maker an induction cooker or a fridge,
                each appliance that you have on your home will be connected to
                an electric outlet. On top of that, each type of appliance will
                have a circuit breaker outlet.
              </p>
              <p>
                The great thing is that with a little know-how, it is not hard
                to connect your electrical appliances to an outlet.
              </p>
              <p>You will need to make sure that you have the right tools. </p>
              <p>
                One of the main factors that you need to consider is installing
                a circuit breaker for your electrical appliances. Once there is
                a power overload, the unit can disconnect the circuit, thus
                prevent damage to your appliances.
              </p>
              <p>
                Think of a circuit as a fuse, only this time, unlike the fuse,
                which gets damaged during a power surge, the circuit breaker
                simply cuts off the current and can be reused time and again.
              </p>
              <p>
                If you have an electric range, this is how you can connect a
                power chord.
              </p>
              <ul>
                <li>
                  Start by removing the cover plate of the wire connection.
                </li>
                <li>
                  If necessary, alter the ground connection. This will depend on
                  the color of the wires in the terminal block and the type of
                  cord you were intending to use.
                </li>
                <li>
                  Connect the 4 prong chord or the 3 prong cord depending on the
                  type of electric range
                </li>
                <li>
                  Install the strain relief clamp. This will help grip the cord
                  and protect the connection.
                </li>
                <li>Fix back the cover plate and you are good to go.</li>
              </ul>
              <p>
                Don’t worry of you don’t have any electrical experience or
                simply prefer to not handle electrical components. You can
                always hire the services of a professional through{" "}
                <Link to="https://tapatradie.com/">Tap a Tradie</Link> in
                minutes.
              </p>
              <span>
                Understand which electrical connections to use and which to
                avoid
              </span>
              <p>
                Some connections are good, while others should be avoided. Not
                all manufacturer connections such as switches and outlets are
                created equal. Some are higher quality and thus much safer to
                use around the home than others are.
              </p>
              <p>
                It is important that you understand how to identify the best
                connections so you can choose these over substandard and risky
                connections.
              </p>
              <p>
                After all, poor quality connections are likely to result in
                loose wiring and can even cause damage and fire in your home.
              </p>
              <span>Choose the right color wire and wire size</span>
              <p>
                When it comes to connection wires, there are three important
                factors to keep in mind before running any connection.
              </p>
              <ul>
                <li>The wire color</li>
                <li>The wire size</li>
                <li>The wire type</li>
              </ul>
              <p>
                The wire size is especially crucial as it means that you can use
                a wire that will be able to handle the load.
              </p>
              <p>
                It’s important to note that even while fuses and circuit
                breakers offer great protection, they don’t always offer 100%
                complete protection from power surges.
              </p>
              <p>
                Plugging too many appliances to an outlet can cause an overload
                of amperage. For instance, if a heater is plugged in in a wire
                that isn’t built for the current amount, this could cause the
                wire to heat and, in turn, meet the surrounding plastic cover.
                This can ignite and cause a fire.
              </p>
              <p>
                If you were to load appliances on a wire gauge designed to carry
                more current than the appliance needs, you don’t have to worry
                about overheating and resulting fires. These are just two of the
                important reasons why it’s important to choose the ideal wire
                size.
              </p>
              <p>
                The color will help you identify whether the wire is neutral,
                hot or is a ground wire.
              </p>
              <p>
                Keep in mind that you need to pay special attention to the type
                of wire. Often the type of wire will also influence the size of
                the wire.
              </p>
              <span>The electrical service connections</span>
              <p>
                It is crucial that you make the right electrical wire connected
                to the right electrical service components. This ensures that
                electricity flows without any issues.
              </p>
              <p>
                Before you can do any electrical connections, such as wiring an
                electric meter or even disconnect an electrical panel, it is
                important that you understand where each wire goes.
              </p>
              <p>
                For instance, this is what you need to know when wiring an
                electrical panel
              </p>
              <ul>
                <li>
                  Start by checking the feeder wires for power using a voltage
                  tester
                </li>
                <li>Open the knockouts</li>
                <li>Mount the circuit breaker panel</li>
                <li>Install the main service wires</li>
                <li>Connect the main ground wire</li>
                <li>Connect the main service neutral</li>
                <li>Connect the main breaker</li>
                <li>Pull the wires for the branch circuits</li>
                <li>Connect the branch circuit ground wires</li>
                <li>Finally, connect the circuit breakers</li>
              </ul>
              <br />
              <span>Connecting electric devices</span>
              <p>
                To ensure that the electrical connections are safe, any
                electrical device must be wired the right way.
              </p>
              <p>
                Different devices may need different power outlets. For
                instance, some require 20-volt outlets to function. Other
                devices, however, will only work with 240-volt outlets.
              </p>
              <p>
                You will need to connect wires to the device terminals the right
                way. This means understanding the right way to strip the wires,
                bend as well as tighten connections.
              </p>
              <p>
                This ensures you get a functional and reliable connection for
                many years to come.
              </p>
              <p>
                For instance, this is what you need to do when wiring split
                outlets.
              </p>
              <ul>
                <li>Turn off the circuit breaker at the service panel</li>
                <li>Cut or sever the terminal fin</li>
                <li>Ensure you remove all remnants of the terminal find</li>
                <li>Strip the wire casing</li>
                <li>Start with wiring the ground</li>
                <li>Wire the neutral wire</li>
                <li>Wire the red wire</li>
                <li>Install the outlet</li>
                <li>Finally put on the faceplate</li>
              </ul>
            </>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
