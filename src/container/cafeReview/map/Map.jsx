import { Box, Margin, Flex, Strong, Text, Button } from "../../../components";

const Map = ({
	places,
	mapContainer,
	setPlace,
	detailedAddress,
	setDetailedAddress,
}) => {
	return (
		<Box variant="cafe-review-map-item">
			<Flex>
				<Box ref={mapContainer} variant="cafe-review-map" />
				<Box variant="cafe-review-map-content-wraper">
					{places.map((item, idx) => {
						console.log("item =>", item);
						return (
							<Margin margin="10px" key={idx}>
								<Box
									id="result-list"
									key={item.id}
									variant="cafe-write-pick-info"
								>
									<Strong variant="cafe-write-address">
										{item.place_name}
									</Strong>
									<Margin margin="10px 0 0 0">
										{item.road_address_name ? (
											<>
												<Text variant="cafe-write-address">
													{item.road_address_name}
												</Text>
												<Text variant="cafe-write-address">
													{item.address_name}
												</Text>
											</>
										) : (
											<>
												<Text>{item.address_name}</Text>
											</>
										)}
										<Button
											onClick={() => {
												setPlace(item.place_name);
												setDetailedAddress(item.id);
											}}
										>
											선택
										</Button>
									</Margin>
								</Box>
							</Margin>
						);
					})}
				</Box>
			</Flex>
		</Box>
	);
};

export default Map;
