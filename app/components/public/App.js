import React from 'react';
import Header from './Header';

class App extends React.Component {

	render() {

		return (
			<React.Fragment>
				<Header />
				<div id="blog">

					<div className="individual-blog">
						<a href="/single">
							<h2 className="section-title post-cta-top">
								<span className="post-cta-left">
									Cupcakes
								</span>
								<span className="post-cta-right">
									Wednesday August 2nd 2020
								</span>
							</h2>
						</a>

						<p className="blog-post">
							Apple pie bear claw candy canes wafer. Chocolate cake carrot cake jujubes tart cake danish gingerbread sweet roll brownie. Cookie sugar plum bonbon. Pie oat cake candy canes croissant icing topping icing. Biscuit carrot cake candy pie. Marshmallow sesame snaps cheesecake fruitcake chocolate bar halvah topping. Sugar plum tiramisu candy canes gummies marzipan. Powder chupa chups cake.
						</p>
						<p className="blog-post">
							Cookie sweet jujubes croissant liquorice. Tiramisu icing liquorice liquorice. Cotton candy sweet roll fruitcake bear claw sweet roll. Candy powder gingerbread jelly-o sweet lemon drops cotton candy. Chupa chups muffin muffin gummi bears. Lemon drops cake bonbon dragée bear claw topping candy. Halvah lemon drops cake topping. Candy canes dessert pudding tart cake candy icing.
						</p>
						<p className="blog-post">
							Carrot cake bonbon gummies caramels liquorice cotton candy jelly beans jelly apple pie. Wafer muffin bear claw fruitcake cookie soufflé cheesecake. Gummies pie candy. Caramels jelly-o chocolate cake gingerbread topping wafer cotton candy. Powder candy canes jelly lollipop cheesecake tart tootsie roll cookie gummies. Cookie pastry cake. Pudding bear claw lemon drops soufflé cupcake gummi bears. Marzipan apple pie brownie tart chocolate cake.
						</p>

						<div className="post-cta-bottom">
							<a href="/single">0 Comments - Read More</a>
						</div>
					</div>

					<div className="individual-blog">
						<a href="/post">
							<h2 className="section-title post-cta-top">
								<span className="post-cta-left">
									Business
								</span>
								<span className="post-cta-right">
									Monday July 17th 2020
								</span>
							</h2>
						</a>

						<p className="blog-post">
							Put in in a deck for our standup today big picture yet that is a good problem to have. They have downloaded gmail and seems to be working for now big data clear blue water we need to dialog around your choice of work attire, so onward and upward, productize the deliverables and focus on the bottom line throughput and manage expectations. You gotta smoke test your hypothesis pass the mayo, appeal to the client, sue the vice president we need this overall to be busier and more active let's prioritize the low-hanging fruit nor pulling teeth can I just chime in on that one, and 4-blocker.
						</p>
						<p className="blog-post">
							Nail it down quantity quick win pass the mayo, appeal to the client, sue the vice president spinning our wheels. Digitalize player-coach and we need to future-proof this are there any leftovers in the kitchen? it is all exactly as i said, but i don't like it and Q1, so time to open the kimono. Make sure to include in your wheelhouse but what's the real problem we're trying to solve here? and curate social currency time to open the kimono nor we need to start advertising on social media and feed the algorithm. Baseline the procedure and samepage your department show pony draw a line in the sand.
						</p>
						<p className="blog-post">
							Can you send me an invite? baseline that ipo will be a game-changer. Market-facing where do we stand on the latest client ask, yet pass the mayo, appeal to the client, sue the vice president . Corporate synergy this is meaningless cross sabers can we align on lunch orders, golden goose. Can we jump on a zoom drop-dead date three-martini lunch, for value-added.
						</p>
						<div className="post-cta-bottom">
							<a href="/post">0 Comments - Read More</a>
						</div>
					</div>



				</div>
			</React.Fragment>
		)
	}
}

export default App