import { useEffect, useState, useRef } from "react";
import { Box, Text, Flex, Strong } from "../../components";
import Map from "./map";

const DetailMap = ({ searchPlace, addressId }) => {
	console.log("searchPlace 우왕 ======>", searchPlace);
	const { kakao } = window;
	// 검색결과를 담을 배열
	const [places, setPlaces] = useState([]);
	const mapContainer = useRef(null);
	useEffect(() => {
		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		const map = new kakao.maps.Map(mapContainer.current, options);

		const ps = new kakao.maps.services.Places();

		function placesSearch(data, status) {
			if (status === kakao.maps.services.Status.OK) {
				// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
				let bounds = new kakao.maps.LatLngBounds();
				for (let i = 0; i < data.length; i++) {
					if (!addressId) {
						displayMarker(data[i]);
						// LatLngBounds 객체에 좌표를 추가
						bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
						map.setBounds(bounds);
						setPlaces(data);
					} else if (addressId === data[i].id) {
						displayMarker(data[i]);
						// LatLngBounds 객체에 좌표를 추가
						bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
						map.setBounds(bounds);
						setPlaces(() => {
							return [data[i]];
						});
					}
				}
			}
		}

		// 검색 키워드 변경시 키워드 검색
		// porps 전달 시점에 이미 address만 전달되도록 리펙토링
		if (searchPlace) ps.keywordSearch(searchPlace, placesSearch);
		// 마커 출력 함수
		const displayMarker = place => {
			let marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x),
			});
			// 마커 클릭시 정보창 출력 & 카카오 맵으로 이동
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
		};
	}, [searchPlace]);

	return <Map mapContainer={mapContainer} places={places} />;
};

export default DetailMap;
