const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon path tests', () => {
	test('icon level 3', () => {
		expect(formatVolumeIconPath(67)).toMatch("./assets/media/icons/volume-level-3.svg")
	});


	test('icon level 2', () => {
		expect(formatVolumeIconPath(34)).toMatch("./assets/media/icons/volume-level-2.svg")
	});


	test('icon level 1', () => {
		expect(formatVolumeIconPath(1)).toMatch("./assets/media/icons/volume-level-1.svg")
	});

	test('icon level 0', () => {
		expect(formatVolumeIconPath(0)).toMatch("./assets/media/icons/volume-level-0.svg")
	});

});