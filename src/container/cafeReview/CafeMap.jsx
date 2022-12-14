import React, { useEffect, useState, useRef } from "react";
import Map from "./map";

const CafeMap = ({ searchPlace, setPlace }) => {
	const { kakao } = window;
	// 검색결과를 담을 배열 state
	const [places, setPlaces] = useState([]);
	// 카카오 맵을 담을 요소를 위한 ref
	const mapContainer = useRef(null);
	// 검색 키워드(searchPlace) 변경시 실행 effect
	useEffect(() => {
		// 카카오 맵 정보창
		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
		// 카카오 맵 옵션
		// option.center: 초기 좌표
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3,
		};
		// 카카오 맵
		const map = new kakao.maps.Map(mapContainer.current, options);
		// 장소 검색을 위한 객체
		const ps = new kakao.maps.services.Places();
		// 키워드 검색 함수
		const placesSearch = (data, status) => {
			if (status === kakao.maps.services.Status.OK) {
				// 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
				let bounds = new kakao.maps.LatLngBounds();

				for (let i = 0; i < data.length; i++) {
					if (!searchPlace.addressId) {
						displayMarker(data[i]);
						// LatLngBounds 객체에 좌표를 추가
						bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
						map.setBounds(bounds);
						setPlaces(data);
					} else if (searchPlace.addressId === data[i].id) {
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
		};
		// 검색 키워드 변경시 키워드 검색
		// porps 전달 시점에 이미 address만 전달되도록 리펙토링
		if (searchPlace.address)
			ps.keywordSearch(searchPlace.address, placesSearch);
		// 마커 출력 함수
		const displayMarker = place => {
			let marker = new kakao.maps.Marker({
				map: map,
				position: new kakao.maps.LatLng(place.y, place.x),
			});
			// 마커 클릭시 정보창 출력 & 카카오 맵으로 이동
			kakao.maps.event.addListener(marker, "click", () => {
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

	return (
		<>
			<Map places={places} mapContainer={mapContainer} setPlace={setPlace} />
		</>
	);
};

export default CafeMap;
