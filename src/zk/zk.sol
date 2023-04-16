// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract chainwork {

    uint workCount;
    address payable owner;
    constructor() payable {
    owner = payable(msg.sender);
    }
     


    event work(address sender, uint amount, string note, string name, uint time , string file);

    struct workStruct{
        address sender;

        uint amount;
        string desc;
        string title;
        uint time;
        string file;
    }

    workStruct[] Works;

    receive() external payable {}


    // function sendMoney(uint amount, address _receiver) public payable returns(uint) {
    //     (bool success,) = _receiver.call{value:amount}("");
    //     // (bool success, ) = owner.call{value: amount}('');
    //     // (bool success, ) = payable(address(this)).call{value: amount}('');
    //     // bool success = payable(address(this)).send(amount);
    //     require(success,"call failed");
    //     return msg.value;
    // }

    function addWork( uint _amount, string memory _desc, string memory _title, string memory _file) public {
        workCount++;
        // (bool success,) = msg.sender.call{value:_amount}("");
        // require(success,"call failed");
        Works.push(workStruct(msg.sender, _amount, _desc, _title, block.timestamp, _file));
        emit work(msg.sender, _amount, _desc, _title, block.timestamp, _file);
    }

    function getAllWork() public view returns(workStruct[] memory){
        return Works;
    }

    function getWorkCount() public view returns (uint256){
        return workCount;
    }

    function addReceiver(address payable _receiver, uint _workNum) public{
         uint _amount = Works[_workNum].amount;
         (bool success,) = _receiver.call{value:_amount}("");
         require(success,"call failed");
    }
 }