import { Box, Text, Flex, Strong } from "../../../components";

const Map = ({ mapContainer, places }) => {
	return (
		<Box variant="detail-map">
			<Box
				ref={mapContainer}
				style={{
					width: "100%",
					height: "460px",
				}}
			/>
			{places.map(item => {
				return (
					<Box id="result-list" key={item.id} variant="detail-map-desc">
						<Flex ai="center">
							<Box variant="detail-map-desc-content">
								<Box variant="detail-map-desc-address">
									<a href={item.place_url} target="_blank" rel="noreferrer">
										<Flex ai="center" gap="30px">
											<Strong variant="cafe-write-address">
												{item.place_name}
											</Strong>
											{item.road_address_name ? (
												<Box variant="cafe-write-address">
													<Flex fd="column" gap="5px">
														<Text>{item.road_address_name}</Text>
														<Text>{item.address_name}</Text>
														<Text>{item.phone}</Text>
													</Flex>
												</Box>
											) : (
												<Box variant="cafe-write-address">
													<Flex fd="column" gap="5px">
														<Text>{item.address_name}</Text>
														<Text>{item.phone}</Text>
													</Flex>
												</Box>
											)}
										</Flex>
									</a>
								</Box>
							</Box>
						</Flex>
					</Box>
				);
			})}
		</Box>
	);
};

export default Map;
