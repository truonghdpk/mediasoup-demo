let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	const hostname = '192.168.40.4';

	return `ws://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}
