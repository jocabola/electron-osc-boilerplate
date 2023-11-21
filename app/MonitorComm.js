const PORT = 12000;
const HOST = {
	value: 'localhost',
};
const osc = require('osc');

const client = new osc.UDPPort({
	localAddress: HOST.value,
	// localPort: PORT,
	metadata: true,
});

client.open();

class MonitorComm {
	static sendMessage(addr) {
		client.send(
			{
				address: `/${addr}`,
				/* args: [
					{
						type: 'f',
						value: param,
					},
				], */
			},
			HOST.value,
			PORT
		);
	}
}

module.exports = MonitorComm;