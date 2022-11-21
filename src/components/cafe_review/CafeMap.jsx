import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../common";

const CafeMap = ({ searchPlace }) => {
	const { kakao } = window;
	// 검색결과를 담을 배열
	const [Places, setPlaces] = useState([]);
	const mapContainer = useRef(null);
	useEffect(() => {
		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer.current, options);

		const ps = new kakao.maps.services.Places();

		if (searchPlace) ps.keywordSearch(searchPlace, placesSearch);

		function placesSearch(data, status) {
			if (status === kakao.maps.services.Status.OK) {
				// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					displayMarker(data[i]);
					// LatLngBounds 객체에 좌표를 추가
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}
				// LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정
				// 이때 지도의 중심좌표와 레벨이 변경될 수 있다
				map.setBounds(bounds);
				setPlaces(data);
			}
		}

		function displayMarker(place) {
			let marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x),
			});

			kakao.maps.event.addListener(marker, "click", function () {
				let url = "https://map.kakao.com/link/map/" + place.id;
				window.open(url, "_blank");
				let content =
					'<div style="padding:5px;font-size:12px;">' +
					place.place_name +
					"</div>";
				infowindow.setContent(content);
				infowindow.open(map, marker);
			});
		}
	}, [searchPlace]);

	return (
		<div>
			<div
				ref={mapContainer}
				style={{
					width: "500px",
					height: "500px",
				}}
			></div>

			{Places.map((item, i) => {
				console.log("item =>", item);
				return (
					<div id="result-list" key={item.id}>
						<div style={{ marginTop: "20px" }}>
							<span>{i + 1}</span>
							<div>
								<h5>{item.place_name}</h5>
								{item.road_address_name ? (
									<div>
										<span>{item.road_address_name}</span>
										<span>{item.address_name}</span>
									</div>
								) : (
									<span>{item.address_name}</span>
								)}
								<span>{item.phone}</span>
							</div>
							<Button>선택</Button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CafeMap;
